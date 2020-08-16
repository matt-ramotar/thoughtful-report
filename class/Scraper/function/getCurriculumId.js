export default async function getCurriculumId(page) {
  // GREETING_SELECTOR
  return await page.evaluate(sel => {
    const id = document.querySelector(sel).innerText.match(/w\d+d\d+/)[0];
    const w = id.match(/(?<=w)\d+/)[0];
    const d = id.match(/(?<=d)\d+/)[0];
    return [w, d];
  }, GREETING_SELECTOR);
}
