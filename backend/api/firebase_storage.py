from django.core.files.storage import Storage
from django.core.files.base import ContentFile
from django.utils.deconstruct import deconstructible
import firebase_admin
from firebase_admin import credentials, storage
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

firebase_creds = os.path.join(
    BASE_DIR, "config", "umer-portfolio-23756-firebase-adminsdk-4owq0-687f5bf218.json"
)

@deconstructible
class FirebaseStorage(Storage):
    def __init__(self, bucket_name=None):
        if not bucket_name:
            bucket_name = 'umer-portfolio-23756'  # Default bucket name
        if not firebase_admin._apps:
            cred = credentials.Certificate(firebase_creds)
            firebase_admin.initialize_app(cred, {
                'storageBucket': f'{bucket_name}.appspot.com',
            })
        self.bucket = storage.bucket()

    def _open(self, name, mode='rb'):
        blob = self.bucket.blob(name)
        content = blob.download_as_string()
        return ContentFile(content)

    def _save(self, name, content):
        blob = self.bucket.blob(name)
        blob.upload_from_file(content.file)
        blob.make_public()
        return name

    def delete(self, name):
        blob = self.bucket.blob(name)
        blob.delete()

    def exists(self, name):
        blob = self.bucket.blob(name)
        return blob.exists()

    def url(self, name):
        blob = self.bucket.blob(name)
        return blob.public_url

    def size(self, name):
        blob = self.bucket.blob(name)
        return blob.size

    def listdir(self, path):
        blobs = list(self.bucket.list_blobs(prefix=path))
        directories, files = set(), set()
        for blob in blobs:
            parts = blob.name[len(path):].split("/", 1)
            if len(parts) == 1:
                files.add(parts[0])
            else:
                directories.add(parts[0])
        return list(directories), list(files)

    def get_available_name(self, name, max_length=None):
        return name

    def path(self, name):
        return name
