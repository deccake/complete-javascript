//BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalInc) {
    if (totalInc > 0) {
      this.percentage = Math.round((this.value / totalInc) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercantage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      //create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //create new item with inc or exp
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      //push newitem into data structure
      data.allItems[type].push(newItem);
      //return new element
      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;
      ids = data.allItems[type].map(function (current) {
        return current.id;
      });
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function () {
      //1. calcualte total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");
      //2. calculate budget : income -expenses
      data.budget = data.totals.inc - data.totals.exp;
      //3. calculate percentage of income we spent
      if (data.totals.inc > 0) data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    },
    calculatePercentage: function () {
      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercantage: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercantage();
      });
      return allPerc;
    },
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },
    testing: function () {
      console.log(data);
    },
  };
})();

//UI CONTROLLER
var UIController = (function () {
  var DOMString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: ".item__percentage",
    dateLabel: ".budget__title--month",
  };

  var formatNumber = function (num, type) {
    var numSplit, int, dec;
    /**
     * + or - before the number
     * exactly 2 decimal point
     * comma seprated the thousand
     */
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split(".");
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
    }

    return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
  };

  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMString.inputType).value, //either inc or exp
        description: document.querySelector(DOMString.inputDescription).value,
        value: parseFloat(document.querySelector(DOMString.inputValue).value),
      };
    },

    addListItems: function (obj, type) {
      var html, newHtml, element;
      //create some HTML string with placeholder
      if (type === "inc") {
        element = DOMString.incomeContainer;
        html = `<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div>
            <div class="right clearfix" > <div class="item__value">%value%</div> <div
            class="item__delete"><button class="item__delete--btn"><i
          class="ion-ios-close-outline"></i></button>  </div></div></div>`;
      } else if (type === "exp") {
        element = DOMString.expenseContainer;
        html = `<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div>
            <div class="right clearfix"><div class="item__value">%value%</div><div
                class="item__percentage">21%</div><div class="item__delete"><button
                    class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div>
        </div></div>`;
      }

      //replace placeholder with actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));
      //insert html into dom
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    deleteListItem: function (selectorId) {
      var element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },

    clearField: function () {
      var field, fieldArr;

      field = document.querySelectorAll(DOMString.inputDescription + "," + DOMString.inputValue);

      fieldArr = Array.prototype.slice.call(field);

      fieldArr.forEach(function (current, index, array) {
        current.value = "";
      });
      fieldArr[0].focus();
    },
    displayBudget: function (obj) {
      var type;

      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(DOMString.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMString.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
      document.querySelector(DOMString.expenseLabel).textContent = formatNumber(obj.totalExp, "exp");
      if (obj.percentage > 0) {
        document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + "%";
      } else {
        document.querySelector(DOMString.percentageLabel).textContent = "---";
      }
    },
    displayPercentage: function (percantages) {
      var fields = document.querySelectorAll(DOMString.expensesPercLabel);

      nodeListForEach(fields, function (current, index) {
        //do some===
        if (percantages[index] > 0) current.textContent = percantages[index] + "%";
        else current.textContent = "---";
      });
    },

    displayMonth: function () {
      var now, year, month, months;
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      now = new Date();
      year = now.getFullYear();
      month = months[now.getMonth()];
      document.querySelector(DOMString.dateLabel).textContent = month + " " + year;
    },

    changedType: function () {
      var fields = document.querySelectorAll(DOMString.inputType + "," + DOMString.inputDescription + "," + DOMString.inputValue);
      nodeListForEach(fields, function (cur, i) {
        cur.classList.toggle("red-focus");
      });
      document.querySelector(DOMString.inputBtn).classList.toggle("red");
    },

    getDOMString: function () {
      return DOMString;
    },
  };
})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListener = function () {
    var DOM = UICtrl.getDOMString();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener("change", UICtrl.changedType);
  };

  var updateBudget = function () {
    var budget;
    //1. calculate budget
    budgetCtrl.calculateBudget();
    //2. return budget
    budget = budgetCtrl.getBudget();

    //3. update the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentage = function () {
    //1. calculate percentage
    budgetCtrl.calculatePercentage();
    //2. read percentage from budget controller
    var percantages = budgetCtrl.getPercantage();
    //3. update ui with new percentage
    UICtrl.displayPercentage(percantages);
  };

  var ctrlAddItem = function () {
    var input, newItem;
    //1. get filed input data
    input = UICtrl.getInput();

    if (input.description != "" && !isNaN(input.value) && input.value > 0) {
      //2. add new item to budget
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      //3. also add new item to UI
      UICtrl.addListItems(newItem, input.type);
      //4. clear the fields
      UICtrl.clearField();
      //5. calculate and update budget to ui
      updateBudget();

      //6. calculate and update percentage
      updatePercentage();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemId, splitId, type, ID;
    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemId) {
      splitId = itemId.split("-");
      type = splitId[0];
      ID = parseInt(splitId[1]);

      //1. delete item from data structure
      budgetCtrl.deleteItem(type, ID);
      //2. detele item from ui
      UICtrl.deleteListItem(itemId);
      //3. update and show budget after deleting item
      updateBudget();
      //6. calculate and update percentage
      updatePercentage();
    }
  };

  return {
    init: function () {
      console.log("Application has started!");
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setupEventListener();
    },
  };
})(budgetController, UIController);

controller.init();
