---
# JavaScript Basics Cheat Sheet


This repository provides a beginner-friendly JavaScript cheat sheet that explains fundamental concepts used in everyday programming. It includes comments, examples, and demonstrations of variables, data types, operators, functions, control structures, and program flow. The goal is to help new developers learn JavaScript in a clear and practical way.
---
## What This Cheat Sheet Covers

### ✅ **Environment Basics**

* Logging output to the console using `console.log()`
* Displaying input/output dialogs using `prompt()` and `alert()`

### ✅ **Variables and Data Types**

* Declaring variables using `var`, `let`, and `const`
* Primitive data types: `String`, `Number`, `Boolean`, `Null`, `Undefined`
* Complex data types: `Array`, `Object`
* Special types: `Symbol`, `BigInt`

### ✅ **Arithmetic & Assignment Operators**

* Basic arithmetic operations: `+`, `-`, `*`, `/`, `%`, `**`
* Increment (`++`) and decrement (`--`)
* Assignment operators such as `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

### ✅ **Comparison & Logical Operators**

* Comparison operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
* Logical operators: `&&`, `||`, `!`

### ✅ **Strings**

* Concatenation using `+`
* Template literals using backticks (```)
* Repetition using `.repeat()`

### ✅ **Functions**

* Declaring and calling functions
* Parameters vs arguments
* Using return values
* User-defined functions

### ✅ **Program Flow (Control Structures)**

* Conditional statements: `if`, `else if`, and `else`
* Selection flow using `switch`
* Sequential execution

### ✅ **Switch Statement Structure**

<pre class="overflow-visible!" data-start="1730" data-end="1841"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>switch</span><span>(value) {
  </span><span>case</span><span></span><span>condition</span><span>:
    </span><span>// Code to run</span><span>
    </span><span>break</span><span>;

  </span><span>default</span><span>:
    </span><span>// Code if no match</span><span>
}
</span></span></code></div></div></pre>

---

## Example Highlight

<pre class="overflow-visible!" data-start="1870" data-end="2332"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>function</span><span></span><span>daysOfWeek</span><span>(</span><span>dayNumber</span><span>){
  </span><span>switch</span><span>(</span><span>Number</span><span>(dayNumber)){
    </span><span>case</span><span></span><span>1</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Sunday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>2</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Monday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>3</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Tuesday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>4</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Wednesday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>5</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Thursday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>6</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Friday"</span><span>); </span><span>break</span><span>;
    </span><span>case</span><span></span><span>7</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Saturday"</span><span>); </span><span>break</span><span>;
    </span><span>default</span><span>: </span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Enter a valid day"</span><span>);
  }
}

</span><span>daysOfWeek</span><span>(</span><span>4</span><span>); </span><span>// Output: Wednesday</span><span>
</span></span></code></div></div></pre>

---

## Purpose

This cheat sheet is designed for:

* Beginner programmers learning JavaScript for the first time
* Students reviewing core concepts
* Developers who want a quick refresher or teaching resource

---

## How to Use

You can:

* Copy the code and experiment with it in your browser console
* Use it as a reference while writing your own scripts
* Teach others using the examples included
* Create a file call it script.js
* Download node Js if you have it you are good to go
* Run the file in your terminal by runing > node script.js


# LICENSE


Copyright 2025 ANDRE LEON KAEULANA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
