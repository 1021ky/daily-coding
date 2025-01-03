# chatgptにシンボルコロンに慣れるためのお題を出してもらった。
# 問題 1:
# ハッシュのキーとしてシンボルを使い、3つの情報（名前、年齢、職業）を含むハッシュを返すメソッド `create_profile` を作成してください。
# 各キーはシンボルで、例えば :name, :age, :job のように指定してください。
def create_profile(name, age, job)
  {:name => name, :age => age, :job => job}
end

# これはできない。キーには任意の種類のオブジェクトを用いることができるが、hashとeql?が定義されていないとだめなので
# p {'name' => 'fushiguro', 'age' => 16, 'job' => 'jujutsushi'}
# これは可能。シンボルは上記メソッドが定義されている
# p {:name => 'fushiguro', :age => 123, :job => 'jujutsushi'}

# irb(main):006> :name.methods.include?(:eql?)
# => true
# irb(main):007> :name.methods.include?(:hash)
# => true
# irb(main):008>
# キーがシンボルに限り省略できる
# p {name: 'fushiguro', age: 16, job: 'jujutsushi'}

result = create_profile("yuji_itadori", 16, "jujutsushi")
p result[:name]

# # 問題 2:
# # 引数としてシンボルを受け取り、そのシンボルがハッシュのキーとして存在するか確認し、
# # 存在すれば対応する値を返し、存在しなければ "Not found" を返すメソッド `find_in_hash` を作成してください。
# # ハッシュは {name: "Bob", age: 25} を使い、シンボルを引数に取ります。
# def find_in_hash(symbol)
#   data = {name: "Bob", age: 25}
#   data.
# end

# # 問題 3:
# # 引数として文字列を受け取り、その文字列をシンボルに変換して返すメソッド `string_to_symbol` を作成してください。
# # 例えば、引数 "hello" を渡すとシンボル :hello を返すようにしてください。
# def string_to_symbol(str)
#   # ここにコードを記述
# end