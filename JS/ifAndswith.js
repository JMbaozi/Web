//第一步，输入身高和体重
const height = parseFloat(prompt('请输入身高，单位是米'));
const weight = parseFloat(prompt('请输入体重，单位是公斤'));
//第二步，计算BMI指数
const BMI = weight / Math.pow(height, 2);
//第三步，if语句来判断
if (BMI < 18.5) {
    alert('偏瘦');
} else if (BMI < 25) {
    alert('正常');
} else if (BMI < 28) {
    alert('过重');
} else if (BMI <= 32) {
    alert('肥胖');
} else {
    alert('非常肥胖');
}



//第一步，输入
const bianhao = parseInt(prompt('您想加什么油？填写92或者97'));
const sheng = parseFloat(prompt('您想加多少升？'));

//第二步，判断
if (bianhao == 92) {
    //编号是92的时候做的事情
    if (sheng >= 20) {
        const price = sheng * 5.9;
    } else {
        const price = sheng * 6;
    }
} else if (bianhao == 97) {
    //编号是97的时候做的事情
    if (sheng >= 30) {
        const price = sheng * 6.95;
    } else {
        const price = sheng * 7;
    }
} else {
    alert('不好意思，没有这个编号的汽油！');
}

alert('价格是' + price);



let age = 28;

switch (true) {
    case age < 18:
        console.log('未成年人');
        break;
    case age >= 18 && age <= 65:
        console.log('还能干活儿');
        break;
    case age > 65:
        console.log('该退休了');
        break;
    default:
        console.log('默认文案');
        break;
}
// default不一定要写在最后面。 switch 中的 default 无论放到什么位置，都会等到所有case 都不匹配再执行。default 也可以省略。



let retCode = 1003; // 返回码 retCode 的值可能有很多种情况
handleRetCode(retCode);

// 方法：根据接口不同的返回码，处理前端不同的显示状态
function handleRetCode(retCode) {
    if (retCode == 0) {
        alert('接口联调成功');
        return;
    }

    if (retCode == 101) {
        alert('活动不存在');
        return;
    }

    if (retCode == 103) {
        alert('活动未开始');
        return;
    }

    if (retCode == 104) {
        alert('活动已结束');
        return;
    }

    if (retCode == 1001) {
        alert('参数错误');
        return;
    }

    if (retCode == 1002) {
        alert('接口频率限制');
        return;
    }

    if (retCode == 1003) {
        alert('未登录');
        return;
    }

    if (retCode == 1004) {
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        return;
    }

    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
    return;
}



let retCode = 1003; // 返回码 retCode 的值可能有很多种情况

switch (retCode) {
    case 0:
        alert('接口联调成功');
        break;
    case 101:
        alert('活动不存在');
        break;

    case 103:
        alert('活动未开始');
        break;

    case 104:
        alert('活动已结束');
        break;

    case 1001:
        alert('参数错误');
        break;

    case 1002:
        alert('接口频率限制');
        break;

    case 1003:
        alert('未登录');
        break;

    case 1004:
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        break;

    // 其他异常返回码
    default:
        alert('系统君失联了，请稍候再试');
        break;
}



let day = 2;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('work');
        break; // 在这里放一个 break

    case 6:
    case 7:
        console.log('relax');
        break; // 在这里放一个 break

    default:
        break;
}



if (!res || +res.retCode !== 0) {
    if (+res.retCode === 8888) {
        // 未登录
        goLogin();
        return;
    }
    reject(res);
    return;
}
resolve(res);