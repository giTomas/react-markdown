
async function fetchMarkdown(file) {
  const url = `/markdown/${file}`;
  const response = await fetch(url);
  const text = await response.text();

  if (!response.ok) {
  // if (response.status !== 200) {
    // throw Error(text.message);
    throw Error(response.statusText);
  }

  return text;
}

async function showMarkdown(file, fn) {
  try {
    const text = await fetchMarkdown(file);
    fn(text);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

export default showMarkdown;
