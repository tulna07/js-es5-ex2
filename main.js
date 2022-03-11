// Additional step for formatting currency
const currencyFormat = new Intl.NumberFormat("vn-VN");

// Show/ close question handler
const card = document.getElementsByClassName("card"),
  closeCardBtn = document.getElementsByClassName("btn-close-card"),
  showQBtn = document.getElementsByClassName("btn-q-show");

for (let i = 0; i < closeCardBtn.length; ++i) {
  closeCardBtn[i].onclick = function () {
    card[i].style.display = "none";
    showQBtn[i].classList.remove("active");
  };
}

for (let i = 0; i < showQBtn.length; ++i) {
  showQBtn[i].onclick = function () {
    card[i].style.display = "block";
    showQBtn[i].classList.add("active");
  };
}

// Modal handler
const modal = document.getElementsByClassName("modal"),
  modalText = document.getElementsByClassName("modal__text"),
  closeModalBtn = document.getElementsByClassName("btn-close-modal");

for (let i = 0; i < closeModalBtn.length; ++i) {
  closeModalBtn[i].onclick = function () {
    modal[i].style.display = "none";
  };
}

/**
 * 🎃 Bài 1: Tính tiền lương nhân viên
 */
// -------------- Đề bài --------------
// Lương 1 ngày: 100.000
// Cho người dùng nhập vào số ngày làm
// Công thức tính lương (1): lương 1 ngày * số ngày làm

// -------------- SOLUTION --------------
// Input:   - Lương 1 ngày: 100.000 VND
//          - Số ngày làm do người dùng nhập
// Process: 1. Thiết kế giao diện, cho người dùng nhập số ngày làm vào input.
//          2. Tạo hằng salaryPerDay gán giá trị 100000.
//          3. Tạo biến numberOfWorkingDay nhận giá trị do
//             người dùng nhập vào từ giao diện.
//          4. Tạo biến workerSalary lưu giữ kết quả được tính từ
//             công thức tính lương (1) như đề bài.
//          5. In kết quả được tính từ bước 4 ở trên
//             ra modal ở giao diện.
// Output: lương công nhân được tính từ công thức (1)
const salaryPerDay = 100000;
const salaryPerDay_Text = document.getElementById("salary-1-day"),
  numberOfWorkingDay = document.getElementById("working-days"),
  q1FormulaBtn = document.getElementById("btn-q1-formula"),
  q1CalcBtn = document.getElementById("btn-q1-calc");

salaryPerDay_Text.innerHTML = `${currencyFormat.format(salaryPerDay)} VND`;

q1FormulaBtn.onclick = function () {
  modal[0].style.display = "block";
  modalText[0].innerHTML = `workerSalary = salaryPerDay * numberOfWorkingDay`;
};

q1CalcBtn.onclick = function () {
  modal[0].style.display = "block";
  const workerSalary = salaryPerDay * numberOfWorkingDay.value;
  modalText[0].innerHTML = `<strong>Answer 1:</strong> <br>Salary of a worker with ${
    numberOfWorkingDay.value
  } day(s) of working: ${currencyFormat.format(workerSalary)} VND`;
};

/**
 * 🎃 Bài 2: Tính giá trị trung bình
 */
// -------------- Đề bài --------------
// Nhập vào 5 số thực
// Tính giá trị trung bình của 5 số này và xuất ra màn hình

// -------------- SOLUTION --------------
// Input:   - 5 số thực do người dùng nhập vào
// Process: 1. Tạo ra giao diện, cho người dùng nhập vào 5 số bất kỳ.
//          2. Tạo ra 5 biến realNum1, realNum2, ...
//             realNum5 được gán giá trị do người dùng
//             nhập vào từ giao diện.
//          3. Tạo biến average lưu giữ kết quả được tính từ
//             công thức tính trung bình cộng 5 số.
//          4. In kết quả được tính từ bước 3 ở trên
//             ra modal ở giao diện.
// Output: trung bình cộng của 5 số thực
const realNum1 = document.getElementById("real-num-1"),
  realNum2 = document.getElementById("real-num-2"),
  realNum3 = document.getElementById("real-num-3"),
  realNum4 = document.getElementById("real-num-4"),
  realNum5 = document.getElementById("real-num-5");

const q2CalcBtn = document.getElementById("btn-q2-calc"),
  q2FormulaBtn = document.getElementById("btn-q2-formula");

q2FormulaBtn.onclick = function () {
  modal[1].style.display = "block";
  modalText[1].innerHTML = `average = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5`;
};

q2CalcBtn.onclick = function () {
  modal[1].style.display = "block";

  const average =
    (realNum1.value * 1 +
      realNum2.value * 1 +
      realNum3.value * 1 +
      realNum4.value * 1 +
      realNum5.value * 1) /
    5;

  modalText[1].innerHTML = `<strong>Answer 2:</strong><br> Average of 5 real numbers ${realNum1.value}, ${realNum2.value}, ${realNum3.value}, ${realNum4.value}, ${realNum5.value} = ${average}`;
};
/**
 * 🎃 Bài 3: Quy đổi tiền
 */
// -------------- Đề bài --------------
// Quy đổi USD sang VND. Biết rằng 1 USD = 23.500 VND

// -------------- SOLUTION --------------
// Input:   - Cho 1 USD = 23.500 VND
//          - Nhập số tiền USD cần đổi sang VND
// Process: 1. Thiết kế giao diện, cho người dùng nhập vào
//             số tiền USD cần đổi vào input.
//          2. Tạo hằng vnd_per_usd được khởi tạo giá trị 23500
//          2. Tạo biến usd nhận giá trị được nhập vào
//             từ người dùng ở giao diện.
//          3. Tạo biến vnd gán giá trị là kết quả của
//             phép tính usd * vnd_per_usd.
//          4. In kết quả được tính từ bước 3 ở trên
//             ra modal ở giao diện.
// Output: tiền vnd sau khi đổi từ usd
const vnd_per_usd = 23500;
const vnd_per_usd_text = document.getElementById("vnd-per-usd__text");

vnd_per_usd_text.innerHTML = `${currencyFormat.format(vnd_per_usd)}`;

const usd = document.getElementById("usd"),
  q3CalcBtn = document.getElementById("btn-q3-calc"),
  q3FormulaBtn = document.getElementById("btn-q3-formula");

q3FormulaBtn.onclick = function () {
  modal[2].style.display = "block";
  modalText[2].innerHTML = `vnd = usd * vnd_per_usd`;
};

q3CalcBtn.onclick = function () {
  modal[2].style.display = "block";

  const vnd = usd.value * vnd_per_usd;
  modalText[2].innerHTML = `<strong>Answer 3:</strong><br> ${
    usd.value
  } USD = ${currencyFormat.format(vnd)} VND`;
};

/**
 * 🎃 Bài 4: Tính diện tích, chu vi hình chữ nhật
 */
// -------------- Đề bài --------------
// Nhập chiều dài và chiều rộng của hình chữ nhật (HCN)
// Tính và xuất ra diện tích, chu vi của HCN đó

// -------------- SOLUTION --------------
// Input: - Nhập chiều dài và chiều rộng của HCN
// Process: 1. Tạo ra 2 biến rectWidth và rectLength gán lần lượt
//             chiều dài và chiều rộng được nhập vào
//          2. Tạo biến rectPerimeter giữ giá trị chu vi của HCN
//             được tính bằng công thức (rectWidth + rectLength)*2
//          3. Tạo biến rectArea giữ giá trị diện tích của HCN
//             được tính bằng công thức rectWidth * rectLength
//          4. In kết quả được tính từ bước 2 và 3 ở trên
//             ra modal
// Output: Chu vi, diện tích của HCN
const rectWidth = document.getElementById("width"),
  rectLength = document.getElementById("length");

const q4CalcBtn = document.getElementById("btn-q4-calc"),
  q4FormulaBtn = document.getElementById("btn-q4-formula");

q4FormulaBtn.onclick = function () {
  modal[3].style.display = "block";
  modalText[3].innerHTML = `rectPerimeter = (rectWidth + rectLength) * 2<br>  rectArea = rectWidth * rectLength`;
};

q4CalcBtn.onclick = function () {
  modal[3].style.display = "block";
  const rectPerimeter = (rectWidth.value * 1 + rectLength.value * 1) * 2,
    rectArea = rectWidth.value * rectLength.value;
  modalText[3].innerHTML = `<strong>Answer 4:</strong><br> - Perimeter of Rectangle: ${rectPerimeter}<br>- Area of Rectangle: ${rectArea}`;
};

/**
 * 🎃 Bài 5: Tính tổng 2 ký số
 */
// -------------- Đề bài --------------
// Nhập vào 1 số có 2 chữ số
// Tính tổng 2 ký số của số vừa nhập

// -------------- SOLUTION --------------
// Input: - Nhập vào 1 số có 2 chữ số
// Process: 1. Tạo ra biến numberWith2Digits gán giá trị được
//             nhập vào
//          2. Tạo biến unitPlace giữ giá trị hàng đơn vị được tính
//             bằng công thức numberWith2Digits % 10
//          3. Tạo biến tenPlace giữ giá trị hàng chục được tính
//             bằng công thức Math.floor(numberWith2Digits / 10)
//          4. Tạo biến total lưu giữ kết quả là tổng của unitPlace + tenPlace
//          5. In kết quả được tính từ bước 4 ở trên ra modal
// Output: Tổng 2 ký số của số có 2 chữ số
const numberWith2Digits = document.getElementById("two-digits-num");

const q5FormulaBtn = document.getElementById("btn-q5-formula"),
  q5CaclcBtn = document.getElementById("btn-q5-calc");

q5FormulaBtn.onclick = function () {
  modal[4].style.display = "block";
  modalText[4].innerHTML = `unitPlace = numberWith2Digits % 10<br> tenPlace = Math.floor(numberWith2Digits / 10)<br> total = unitPlace + tenPlace`;
};

q5CaclcBtn.onclick = function () {
  modal[4].style.display = "block";
  const unitPlace = numberWith2Digits.value % 10,
    tenPlace = Math.floor(numberWith2Digits.value / 10),
    total = unitPlace + tenPlace;
  modalText[4].innerHTML = `<strong>Answer 5:</strong><br>Total of 2 digits ${numberWith2Digits.value} = ${total}`;
};
