// 関数名がパスになっている？
import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                {/* リンク */}
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}