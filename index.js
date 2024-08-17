// 1. إنشاء كائن الموظف
let employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

// 2. إنشاء الدوال المطلوبة

// الدالة الأولى: تحديث غير مدمر للكائن
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
      ...employee,
      [key]: value
  };
}

// الدالة الثانية: تحديث مدمر للكائن
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// الدالة الثالثة: حذف غير مدمر لمفتاح من الكائن
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// الدالة الرابعة: حذف مدمر لمفتاح من الكائن
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// اختبارات
console.log(employee); // طباعة الكائن الأصلي
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe')); // طباعة الكائن الجديد مع التحديث غير المدمر
console.log(employee); // طباعة الكائن الأصلي بعد التحديث غير المدمر للتأكد أنه لم يتغير
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe')); // طباعة الكائن بعد التحديث المدمر
console.log(deleteFromEmployeeByKey(employee, 'name')); // طباعة الكائن الجديد بعد الحذف غير المدمر
console.log(employee); // طباعة الكائن الأصلي بعد الحذف غير المدمر للتأكد أنه لم يتغير
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name')); // طباعة الكائن بعد الحذف المدمر
