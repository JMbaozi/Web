var name = 'qianguyihao';
var age = '26';

console.log('我是' + name + ',age:' + age); //传统写法
console.log(`我是${name},age:${age}`); //ES6 写法。注意语法格式
// 上方代码中，倒数第二行用的符号是单引号，最后一行用的符号是反引号



const a = 5;
const b = 10;

// 下面这行代码，故意做了换行。
console.log(`this is ${a + b} and
not ${2 * a + b}.`);



const result = {
    name: 'qianguyihao',
    age: 28,
    sex: '男',
};

// 模板字符串支持换行
const html = `<div>
	<span>${result.name}</span>
	<span>${result.age}</span>
	<span>${result.sex}</span>
</div>`;

console.log(html); // 打印结果也会换行



const nameList = ['千古壹号', '许嵩', '解忧少帅'];

function myTemplate() {
    // join('') 的意思是，把数组里的内容合并成一个字符串
    return `<ul>
	${nameList.map((item) => `<li>${item}</li>`).join('')}
	</ul>`;
}
document.body.innerHTML = myTemplate();



// 在变量中加入字符串进行拼接，可以被同化为字符串



var a = ''; // 字符串类型的变量，如果刚开始没有值，则可以初始化为空字符串
var b = false; // 布尔类型的变量，如果刚开始没有值，则可以考虑默认值为 false
var c = 0;  // 字符串类型的变量，如果刚开始没有值，可以考虑默认值为 0
var d = null; // 空对象，可以初始化为 null



const a1 = '123';
console.log(+a1); // 123
console.log(-a1); // -123

const a2 = '123abc';
console.log(+a2); // NaN
console.log(-a2); // NaN

const a3 = true;
console.log(+a3); // 1
console.log(-a3); // -1

const a4 = false;
console.log(+a4); // 0
console.log(-a4); // -0

const a5 = null;
console.log(+a5); // 0
console.log(-a5); // -0

const a6 = undefined;
console.log(+a6); // NaN
console.log(-a6); // NaN



const result1 = '';
const result2 = { a: 'data1', b: 'data2' };

// 逻辑判断
if (result1) {
    console.log('因为 result1的内容为空，所以代码进不了这里');
}

// 逻辑运算
if (result2 && result2.a) {
    // 接口返回了 result2，且 result2.a 里面有值，前端才做进一步的事情
    console.log('代码能进来，前端继续在这里干活儿');
}

// 空数组[]和空对象{}转换为 Boolean 值时，转换结果为 true



