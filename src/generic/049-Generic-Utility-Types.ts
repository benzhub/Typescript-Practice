interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial 將引用的interface裡面的Property都變成optional
function createCourseGoal(title: string, description: string): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  // 因為使用Partial所以optional
  // courseGoal.completeUntil = new Date();
  return courseGoal as CourseGoal;
}

const obj1 = createCourseGoal('test', 'test description');
console.log(obj1); // {title: 'test', description: 'test description'}

const names: Readonly<string[]> = ['Max', 'Anna']; // 無法再對Array操作，因為它變成Readonly
// names.push('Lisa'); // Property 'push' does not exist on type 'readonly string[]'.
// names.pop('Anna'); // Property 'pop' does not exist on type 'readonly string[]'.
console.log(names); // ['Max', 'Anna']

export {};
