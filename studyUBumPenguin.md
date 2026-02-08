Need me a cs nerd plsplsplsplspllsp || tsukki my lov

- the form tags and form elements with attributes like require, placeholder and type
- form [event handlers](https://khub.mc.pshs.edu.ph/mod/book/view.php?id=2767 "Event Handlers") (onsubmit, onreset, onblur, onfocus)
- the use of :focus on form
- Arrays and objects
- localStorage

## HTML Forms & Attributes

**Key Concept:** Forms are for data entry. Attributes define the "rules" of that entry.

- **`type`**: Determines the input style (`text`, `password`, `number`).
- **`placeholder`**: The temporary hint text inside the box.
- **`required`**: A boolean attribute that prevents submission if the field is empty.
- **Accessing Values**: To get what a user typed in an input with `id="name"`:
    - **Code:** `document.getElementById("name").value;`

## Form Event Handlers & CSS

**Key Concept:** Events are "triggers" that run JavaScript when the user interacts with the form.

- **`onsubmit`**: Runs when the form is submitted.
    - **Crucial Command:** To stop the page from refreshing: `event.preventDefault();`
- **`onfocus` vs `onblur`**: `onfocus` triggers when you click **into** a box; `onblur` triggers when you click **away** from it
- **CSS `:focus`**: A pseudo-class used to highlight the active input.
    - _Example:_ `input:focus { border: 2px solid blue; }`
- **Property Access**: To find the `name` attribute of a JS variable called `element`:
    - **Code:** `element.name`

##  Arrays & Objects 

**Key Concept:** How data is structured and identified.

- **Objects `{}`**: Store data in Key:Value pairs.
- **`for...in` Loop**: This loop iterates over the **KEYS**, not the values.
    - _Example:_ `for(let k in {n:2})` prints **`n`**.
- **Arrays `[]`**: A list of data.
    - **The Big Trick:** `typeof []` is actually **`object`**.
- **Removing Data**: To remove exactly one item from a specific position in an array:
    - **Code:** `array.splice(index, 1);`

## localStorage

**Key Concept:** Saving data so it stays there after a refresh.
- **Saving a String:** `localStorage.setItem("key","value");`
- **Retrieving a String:** `localStorage.getItem("key");`
- **The "User Object" Problem:** You cannot store objects directly. You must "stringify" them.
    - **To Store:** `JSON.stringify(user)`
    - **To Load:** `JSON.parse(localStorage.getItem("user"))`
- **Wiping Data:** To remove every single key in storage:
    - **Code:** `localStorage.clear();`

##  Practice Quiz

**Q1: You have `<input id="age" type="number" required>`. What happens if the user leaves it blank and clicks submit?**

- **Ans:** The browser will show an error message and prevent submission because of the `required` attribute.
    

**Q2: You want to save a high score of 100 under the name "topScore". How do you do it?**

- **Ans:** `localStorage.setItem("topScore","100");`
    

**Q3: If `const car = {brand: "Toyota"}`, what does `console.log(k)` output in `for(let k in car)`?**

- **Ans:** `brand` (because `for...in` grabs the key).
    

**Q4: Why do we use `JSON.parse()` when getting an array back from localStorage?**

- **Ans:** Because localStorage stores everything as a **string**. `JSON.parse()` turns that string back into a usable JavaScript **array/object**.