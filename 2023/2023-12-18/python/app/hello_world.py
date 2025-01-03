from typing import Optional


class HelloWorld:
    STRING = "Hello World"

    def __init__(self, prefix: str = "", postfix: str = "") -> None:
        """コンストラクタ

        :param prefix: 接頭辞
        :param postfix: 接尾辞
        """
        self._prefix = prefix
        self._postfix = postfix

    def formatted_value(self) -> str:
        """フォーマットした値を返す

        :return: フォーマットされた文字
        """
        return f"{self._prefix}{self.STRING}{self._postfix}"

    def reset_pre_post_fix(
        self, prefix: Optional[str] = "", postfix: Optional[str] = ""
    ) -> "HelloWorld":
        """prefix, postfixを変更したインスタンスを返す

        :param prefix: 新しい接頭辞 既存のものと変えたくないときはNone(default None)
        :param postfix: 新しい設備時 既存のものと変えたくないときはNone(default None)
        :return: 生成されたインスタンス
        """
        renewal_prefix = prefix if prefix is not None else self._prefix
        renewal_postfix = postfix if postfix is not None else self._postfix
        return HelloWorld(renewal_prefix, renewal_postfix)
