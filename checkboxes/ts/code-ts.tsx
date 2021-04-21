///<reference path="../node_modules/@types/react/index.d.ts"/>

const options: { [k: string]: boolean } = {
  good: true,
  better: false,
  best: false,
  foo: true,
  bar: false,
};

const App: React.FunctionComponent = () => <>here</>;

ReactDOM.render(<App />, document.getElementById("root"));
