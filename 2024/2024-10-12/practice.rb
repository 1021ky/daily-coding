
def say_from_hash(key)
  # シンボルはハッシュのキーに使える
  hash_data = {:ok => 123}
  hash_data[key]
  # 同じ意味
  hash_data = {ok: 124}
  hash_data[key]
end

if __FILE__ == $0
  # 文字列のような感覚で使ってしまっていたが別物。値を出力したら:ok
  p :ok
  # シングルトンなのでID同じ
  p :ok.object_id == :ok.object_id

  p say_from_hash(:ok)
end