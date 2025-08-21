// <!--nextjsでは記述不要
//  <html>

// <body>
//     <div id="app"></div>
//     <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
//     <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

//     <script type="text/jsx">
//           const app = document.getElementById("app")
//     -->
import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <LikeButton />
        </div>
    );
}

// < !--nextjsでは記述不要
// const root = ReactDOM.createRoot(app);
// root.render(
//     <HomePage />);

//     </script >
// </body >

// </html >
//     -->