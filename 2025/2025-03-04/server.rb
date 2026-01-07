require 'webrick'

#
# HTTPサーバーを実行する
#
def run_server
  srv = WEBrick::HTTPServer.new({ :DocumentRoot => './',
                                  :BindAddress => '127.0.0.1',
                                  :Port => 20080})
  # srv.mount('/view.cgi', WEBrick::HTTPServlet::CGIHandler, 'view.rb')
  srv.mount('/foo.html', WEBrick::HTTPServlet::FileHandler, 'hoge.html')
  # Ctrl+Cで送られるINTシグナルがきたら終了する
  trap("INT"){ srv.shutdown }
  srv.start
end

if __FILE__ == $0
  run_server
end