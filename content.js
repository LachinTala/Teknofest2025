console.log("VSign is active!");

const caption = "hello";

//POST request
fetch("http://127.0.0.1:8000/translate/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ text: caption })
})
  .then(response => response.json())
  .then(data => {
    console.log("Response from Django:", data);

    const box = document.createElement("div");
    box.style.position = "fixed";
    box.style.bottom = "20px";
    box.style.right = "20px";
    box.style.backgroundColor = "white";
    box.style.padding = "10px";
    box.style.zIndex = "9999";

    const img = document.createElement("img");
    img.src = data.sign; // currently just a name like "hello.gif"
    img.alt = caption;
    img.style.width = "100px";

    box.appendChild(img);
    document.body.appendChild(box);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });

