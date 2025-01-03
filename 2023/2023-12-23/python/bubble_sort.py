import random
import time


start_time = time.time()

target = [random.randint(0, 100) for _ in range(20)]

print(f"before: {target}")


result = target
elapsed_time = time.time() - start_time  # 経過時間
print(f"after: {result}")
print(f"Elapsed time: {elapsed_time} seconds")
