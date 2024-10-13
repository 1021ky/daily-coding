# https://www.ruby-lang.org/ja/documentation/ruby-from-other-languages/　を見ながら

# キーワード引数をrubyも定義できる
def print_profile(name: "name", age: 40, from: "Japan")
  p "#{name} #{age} #{from}"
end

print_profile
# 引数の指定は定義のときと同様
print_profile(name: "hogehoge")
x = {name: "fumufumu", age: 20, from: "Antartic"}
# **でハッシュで定義した値を展開して渡せる
print_profile(**x)