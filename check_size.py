# Import necessary library
import glob
import os
import math
from statistics import mean, median, median_high

# Accept input
list_of_directory = [
    'blog',
    'portfolio',
    'src',
    'static',
]

for i in range(len(list_of_directory)):
    print(f"[{i + 1}] {list_of_directory[i]}")

directory_name = list_of_directory[int(input("Please enter the directory code: ")) - 1]

# Define variables
path = f'./{directory_name}/**'
largest_path = ""
largest_size = 0

list_of_path = []
list_of_size = []

media_extension = ('.webp')

count = 0

def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

# Loop through directory and subdirectory
for path in glob.glob(path, recursive=True):
    # If ends with media extension
    if (path.endswith(media_extension)):
        print(f'[INFO] #{count + 1} Checking {path}')

        current_file_size = int(os.stat(path).st_size)
        print(f'[INFO] #{count + 1} Path Size: {convert_size(current_file_size)}')

        # Add to counter
        count = count + 1

        list_of_path.append(path)
        list_of_size.append(int(current_file_size))
        
        if (current_file_size > largest_size):
            largest_path = path
            largest_size = current_file_size

if (len(list_of_path) != 0):
    # Summary Information
    print(f'[SUMMARY] {count} media checked')
    print(f'[SUMMARY] Largest file size: {convert_size(largest_size)}')
    print(f'[SUMMARY] Largest file location: {largest_path}')

    if (input("See more (y): ") == "y"):
        print("[SUMMARY] Count:", str(len(list_of_size)))
        print("[SUMMARY] Sum:", convert_size(sum(list_of_size)))
        print("[SUMMARY] Average:", convert_size(mean(list_of_size)))
        print("[SUMMARY] Median:", convert_size(median(list_of_size)))
        print("[SUMMARY] Maximum:", convert_size(max(list_of_size)))
        print("[SUMMARY] Minimum:", convert_size(min(list_of_size)))

else:
    print(f'[SUMMARY] Media not found, 0 media checked.')