import { Inter, Lusitana } from 'next/font/google'; // 使用するフォントをインポート

export const inter = Inter({ subsets: ['latin'] }); // subsetsを指定することで使うフォントをどの文字に適用するか指定(今回はラテン文字)
export const lusitana = Lusitana({ subsets: ['latin'], weight: "400", style: "normal" }); //同じくラテン文字に適用するフォントを指定,フォントにオプション指定も入れて