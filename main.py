# Import necessary library
import glob
import os
from PIL import Image

# Accept input
directory_name = input("Please enter the directory: ")

# Define variables
path = f'./{directory_name}/**'
converted_path_list = []
image_extension = ('.jpeg', '.jpg', '.png')

count = 0

# Loop through directory and subdirectory
for path in glob.glob(path, recursive=True):
    # If ends with image extension
    if (path.endswith(image_extension)):
        print(f'[INFO] #{count + 1} Processing {path}')

        # Save to directory
        Image.open(path).convert("RGB").save(f'{os.path.splitext(path)[0]}.webp', 'webp')

        # Add to counter
        count = count + 1

        # Append path
        converted_path_list.append(path)
        os.remove(path)

        print(f'[INFO] SUCCESS')

# Summary Information
print(f'[SUMMARY] {count} image converted.')
if (input("See converted image: ") == "y"):
    print("[INFO]", converted_path_list)