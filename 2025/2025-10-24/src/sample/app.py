def message(name: str | None) -> str:
    if not name:
        return "Hello"
    return f"Hello, {name}!"

def main():
    print(message("World"))
