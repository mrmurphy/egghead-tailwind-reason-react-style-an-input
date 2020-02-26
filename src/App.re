open React;

let onChangeText = (updator, event) => {
  let v = ReactEvent.Form.target(event)##value;
  updator(_ => v);
};

[@react.component]
let make = () => {
  // State
  let (content, content_set) = useState(_ => "");

  // Derived State
  let validationError =
    content->Js.String2.length > 5 ? Some("That message is too long") : None;

  <main>
    <h1 className="text-2xl text-gray-800 font-bold"> "Hello!"->string </h1>
    <input
      className={Cn.make([
        "border p-2 rounded",
        "border-red-500"->Cn.ifSome(validationError),
      ])}
      type_="text"
      value=content
      onChange={onChangeText(content_set)}
    />
    {switch (validationError) {
     | Some(message) =>
       <div className="mt-2 text-red-500"> message->string </div>
     | None => null
     }}
  </main>;
};