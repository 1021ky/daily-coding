
#
# エスケープシーケンスを送ることで画面をクリアする
#
# \e[2J: 画面全体をクリア
# \e[f: カーソルをホームポジション（左上）に移動
# @return [<Type>] <description>
#
def clear_screen(resets_position:true)
    clear_str = "\e[2J"
    clear_str += "\e[f" if resets_position
    print clear_str
end

def run
    first_fire = <<~STR

      *
     * *
    * * *
     * *
      *



    STR
    print first_fire
    sleep(1)
    clear_screen
    second_fire = <<~STR
   *       *
     *   *
      * *
     * * *
      * *
       *
     *   *
   *       *



    STR
    sleep(0.2)
    print second_fire
    sleep(1)
    clear_screen
end

if __FILE__ == $0
    run
end