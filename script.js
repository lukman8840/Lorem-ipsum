
const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus nisl dui, at ullamcorper eros finibus ut. Donec vulputate lorem nibh, sed euismod quam fringilla in. Vivamus vehicula nec tellus vitae placerat. Aenean ex dui, gravida ut lorem eu, sollicitudin condimentum nulla. Ut consectetur vestibulum arcu, vitae congue dui luctus ac. Morbi commodo lacus vel risus convallis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis consectetur leo. Mauris vulputate nisi vitae libero finibus congue. Aliquam justo enim, consectetur nec sollicitudin ac, euismod quis nunc. Suspendisse dignissim felis lacus, malesuada fermentum velit bibendum eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'

const button = document.querySelector("button");

const generateLoremIpsum = () => {
    const numParagraph = document.getElementById("numparagraph").value;
    const output = document.getElementById("output");
    output.innerHTML = "";
    for (let i = 0; i < numParagraph; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = loremIpsumText;
        output.appendChild(paragraph)
    }

};

button.addEventListener('click', generateLoremIpsum)