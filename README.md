## ASSESSMENT TEST SUBMISSION FOR OSUNRONBI OKIKIOLA

**Solution to all tasks can be found on github [here](https://github.com/okikiolanlesi/integral/).**

**Link to task 4 and task 5 hosted sites can be found [here](https://integral-six.vercel.app/) and [here](https://integral-2mpm.vercel.app/) respectively.**

### 1. Task 1 Solution
- Link to github repo containing solution [here](https://github.com/okikiolanlesi/integral/tree/main/task-1)
- Link to google sheet where form submissions are stored can be found [here](https://docs.google.com/spreadsheets/d/1Fwp5xpKsmWlAJA1bbHgpcrouiov2ERNH9Sl20KzLC7g/edit?usp=sharing)

**How to run**

- Copy the source code to your local machine
- Then open  the index.html file with live server(a vscode extension)
- The file should be available on ‘http://localhost:5500’ in the browser
- Try submitting an application
- Then check the google sheets link stated above, your form submission should be shown there
### 2. Task 2 Solution
- Link to github repo [here](https://github.com/okikiolanlesi/integral/tree/main/task-2)

**How to run**

- Copy the source code to your local machine
- Node js has to be installed on your computer first([it can be downloaded here](https://nodejs.org/en/))
- Open your terminal and cd into the ‘task-2’ folder
- Then run the below command in your terminal:

```
node solution.js
```

- The correct output for task 2a, 2b and 2c should be printed to your console.

**Code Snippet**
```
const a = (symbol, numChars, numOfLines) => {![](Aspose.Words.f4796b97-d65a-4637-9108-4cf775a01e46.002.png)

const line = symbol.repeat(numChars);

for (let i = 0; i < numOfLines; i++) {

console.log(line);

}

};![](Aspose.Words.f4796b97-d65a-4637-9108-4cf775a01e46.003.png)

console.log("a)"); a("\*", 10, 10);

const b = (symbol, numOfLines) => {

let line = symbol;

for (let i = 0; i < numOfLines; i++) {

console.log(line);

line += symbol;

}

};

console.log("\nb)"); b("\*", 10);

const c = (symbol, numOfLines) => {

let line = symbol.repeat(numOfLines);

for (let i = 0; i < numOfLines; i++) {

console.log(line);

line = line.slice(1);

}

};


console.log("\nc)"); c("\*", 10);
```


### 3. Task 3 Solution
- Link to github repo [here](https://github.com/okikiolanlesi/integral/tree/main/task-3)

**How to run**

- Copy the source code to your local machine
- Node js has to be installed on your computer first([it can be downloaded here](https://nodejs.org/en/))
- Open your terminal and cd into the ‘task-3’ folder
- Then run the below command in your terminal:

```
node solution.js
```

- The correct output for task 3 should be printed to your console.

**Code Snippet**
```
const findSmallest = (array) => {![](Aspose.Words.f4796b97-d65a-4637-9108-4cf775a01e46.005.png)

let smallest = array[0];

for (let i = 1; i < array.length; i++) {

if (array[i] < smallest) {

smallest = array[i];

}

}

return smallest;

};

const example = [2, 5, 8, 10, 33, 55, 1, 7, 100, 30];
console.log(findSmallest(example));
```
### 4. Task 4 Solution
- Link to github repo [here](https://github.com/okikiolanlesi/integral/tree/main/task-4/solution)
- Link to hosted site [here](https://integral-six.vercel.app/)

**How to run**

- Copy the source code to your local machine
- Node js has to be installed on your computer first([it can be downloaded here](https://nodejs.org/en/))
- Open your terminal and cd into the ‘task-4/solution’ folder
- Then run the below command to install dependencies

```
npm install
```

- Then run the below command in your terminal to start the app in development mode:

```
npm run dev
```

- The app should be available at ‘<http://localhost:3000>’ in your browser of choice.
### 5. Task 5 Solution
- Link to github repo [here](https://github.com/okikiolanlesi/integral/tree/main/task-5/solution)
- Link to hosted site [here](https://integral-2mpm.vercel.app/)

**How to run**

- Copy the source code to your local machine
- Node js has to be installed on your computer first([it can be downloaded here](https://nodejs.org/en/))
- Open your terminal and cd into the ‘task-5/solution’ folder
- Then run the below command to install dependencies

```
npm install
```

- Then run the below command in your terminal to start the app in development mode:

```
npm run dev
```
- The app should be available at ‘<http://localhost:3000>’ in your browser of choice.
