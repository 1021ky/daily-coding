"use client";

import { useState } from "react"; // 追加
import { fetchImage } from "./fetch-image";

type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const refreshImage = async () => {
        setImageUrl(""); // 初期化
        const image = await fetchImage();
        setImageUrl(image.url);
    };
    return (
        <div>
            <button onClick={refreshImage}>他のにゃんこも見る</button>
            {imageUrl && <img src={imageUrl} />}
        </div>
    );
}