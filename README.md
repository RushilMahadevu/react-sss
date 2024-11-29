# 🔄 Square Root Calculator  

## 💡 Python Layout
### The Python layout can be viewed [here.](https://github.com/RushilMahadevu/python-layout-sss)

---

## 📌 Project Overview  

The **Square Root Calculator** is a web application built with React that provides an interactive and user-friendly interface for calculating square roots. Leveraging a custom algorithm inspired by a Python script, this tool not only computes square roots of non-negative integers but also offers optional step-by-step calculation details for an educational experience.  

---

## ✨ Key Features  

- **🔢 Square Root Calculation**: Compute square roots of non-negative integers with precision.  
- **📊 Step-by-Step Details**: View detailed steps of the calculation process.  
- **🕒 Real-Time Feedback**: See how long the calculation takes.  
- **🎨 Responsive Design**: Clean and intuitive UI, optimized for all devices.  
- **✅ Input Validation**: Ensures only valid inputs are processed.  

---

## 🔧 Prerequisites  

Before running the project, make sure the following tools are installed:  

- **Node.js** (v14 or later)  
- **npm** (v6 or later)  

---

## 🛠 Technology Stack  

- **⚛️ React**: Core framework for building the UI.  
- **📦 Vite**: Lightning-fast development environment.  
- **💅 Inline Styling**: Clean and simple customization of styles.  

---

## 🚀 Installation  

### 1️⃣ Clone the Repository  
```bash  
git clone https://github.com/yourusername/sqrt-calculator.git  
cd sqrt-calculator  
```  

### 2️⃣ Install Dependencies  
```bash  
npm install  
```  

### 3️⃣ Start the Development Server  
```bash  
npm run dev  
```  

### 4️⃣ Open in Browser  
Visit `http://localhost:5173` to view the app.  

---

## 🧮 How It Works  

### 📐 Calculation Algorithm  

The app employs an iterative approach to calculate square roots:  
1. Initialize `subnum = 1`.  
2. Repeatedly subtract `subnum` from the input number.  
3. Increment `subnum` by 2 after each subtraction.  
4. Count iterations until the input reaches 0 or becomes negative.  

**Example for input `16`:**  
- Iteration 1: 16 - 1 = 15  
- Iteration 2: 15 - 3 = 12  
- Iteration 3: 12 - 5 = 7  
- Iteration 4: 7 - 7 = 0  
- **Result**: Square root of 16 is 4.  

---

## 🏗 Component Structure  

### **`SquareRootCalculator`** (Main Component):  
- **State Management:**  
  - `number`: Stores user input.  
  - `showSteps`: Toggle to display detailed steps.  
  - `result`: Stores the calculated square root.  
  - `stepDetails`: Tracks step-by-step calculations.  

### **UI Sections:**  
1. **Input Section:**  
   - Number input field.  
   - Checkbox to toggle step display.  
   - Calculate button.  
2. **Output Section:**  
   - Displays calculation result.  
   - Optionally shows detailed calculation steps in a table.  

---

## 🎨 Customization  

### 💅 Styling  
- Modify inline style objects to change:  
  - Colors.  
  - Layout.  
  - Button and checkbox styles.  

### 🚀 Extend Functionality  
- Add advanced square root algorithms.  
- Include error handling for edge cases.  
- Write unit tests for additional reliability.  

---

## 🔍 Troubleshooting  

### Common Issues:  
- **Invalid Input:** Ensure the input is a non-negative integer.  
- **Console Errors:** Check the browser console for debugging information.  
- **Environment Issues:** Verify your Node.js and npm versions are compatible.  

---

## 🤝 Contributing  

We welcome contributions to improve this project!  

### Steps to Contribute:  
1. **Fork** the repository.  
2. Create a **feature branch**.  
3. **Commit** your changes.  
4. **Push** to your branch.  
5. Open a **pull request**.  

### Contribution Guidelines:  
- Maintain existing coding style.  
- Add tests for new features.  
- Update documentation when necessary.  

---

## ⚡️ Performance  

- Uses a lightweight iterative algorithm for square root calculations.  
- Minimal state management for efficient React rendering.  
- Optimized for quick user interactions with minimal latency.  

---

## 🏆 Acknowledgments  

- Inspired by a Python script for calculating square roots.  
- Built with React and powered by Vite for blazing-fast performance.  

---  
