function editElement(ref, matcher, replacer) {
    const s = ref.textContent;
    const arr = s.split(matcher).join(replacer);
    ref.textContent = arr;
}