# memo

uvを使ってプロジェクトを作る

```zsh
python -m uv init
```

記録し忘れたが、python -m runで仮想環境が作られた。

```zsh
~/gh/g/1/daily-coding/2025-04-22 main *8 +4 !5 ?11
❯ ls -la
drwxr-xr-x ksanchu staff 256 B  Tue Apr 22 19:41:32 2025  .
drwxr-xr-x ksanchu staff 3.3 KB Tue Apr 22 19:10:13 2025  ..
.rw-r--r-- ksanchu staff   7 B  Tue Apr 22 19:22:22 2025  .python-version
drwxr-xr-x ksanchu staff 224 B  Tue Apr 22 19:41:32 2025  .venv
.rw-r--r-- ksanchu staff 159 B  Tue Apr 22 19:39:01 2025  main.py
.rw-r--r-- ksanchu staff 158 B  Tue Apr 22 19:26:47 2025  pyproject.toml
.rw-r--r-- ksanchu staff 100 B  Tue Apr 22 19:41:22 2025  README.md
.rw-r--r-- ksanchu staff 132 B  Tue Apr 22 19:41:32 2025  uv.lock
~/gh/g
```

実行してみる。

```zsh
❯ python -m uv run main.py
Hello from 2025-04-22!
3.12.3
~/gh/g/1/daily-coding/2025-04-22 main *8 +4 !5 ?11
❯
```
