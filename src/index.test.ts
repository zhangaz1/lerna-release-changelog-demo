import say from "./";

test("index:say", async (cb) => {
  const result = await say("tom");
  expect(result).toEqual("hello, tom");

  cb();
});
