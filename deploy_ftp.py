import os
import ftplib

FTP_HOST = "ftp.mediumblue-butterfly-118465.hostingersite.com"
FTP_USER = "u786839041.paganicustom"
FTP_PASS = "1q2w3e4r@@@SK"
LOCAL_DIR = "out"
REMOTE_DIR = "public_html" # Common root directory for Hostinger sites

def upload_dir(ftp, local_dir, remote_dir):
    print(f"Creating/Entering remote dir: {remote_dir}")
    try:
        ftp.mkd(remote_dir)
    except ftplib.error_perm:
        pass # Directory likely already exists
    
    ftp.cwd(remote_dir)
    
    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            print(f"Uploading file: {item}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {item}", f)
        elif os.path.isdir(local_path):
            upload_dir(ftp, local_path, item)
            ftp.cwd("..")

def main():
    if not os.path.exists(LOCAL_DIR):
        print(f"Error: Directory '{LOCAL_DIR}' doesn't exist. Please run 'npm run build' first.")
        return

    print(f"Connecting to FTP server {FTP_HOST}...")
    try:
        with ftplib.FTP(FTP_HOST) as ftp:
            ftp.login(FTP_USER, FTP_PASS)
            print("Logged in successfully.")
            
            # Start upload
            upload_dir(ftp, LOCAL_DIR, REMOTE_DIR)
            
            print("\nUpload complete successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
