Zoom("img", {
    onTransitionEnd: (img) => {
        img.src = img.src.replace(/-[0-9]+\.jpg/, ".jpg");
    },
    background: "auto",
});
