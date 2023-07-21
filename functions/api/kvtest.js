export async function onRequest(context) {
    console.log("###1 is", context);
    console.log("###2 is", context.env);
    console.log("###3 is", env);
    console.log("###4 is", env.TODO_LIST);
    console.log("###5 is", TODO_LIST);
    const task = await context.env.TODO_LIST.get("test");
    return new Response(task);
}
