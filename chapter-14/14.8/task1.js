let animals = ["����", "��", "����", "������", "����", "��"];

let collator = new Intl.Collator();
animals.sort(function(a, b) {
    return collator.compare(a, b);
});

console.log(animals);