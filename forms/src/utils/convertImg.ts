async function convertToBase64(img: File) {
    return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => res(reader.result);
        reader.onerror = (e) => rej(e);
    });
}

export default convertToBase64;
