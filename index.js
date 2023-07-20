/**
 * 计算表格高度
 * @_e { string }
 * @other { array }
 * @_d { boolean } 是否不计算默认内容
 * */
window.getEleAttr = function (_e, parent) {
    return parent ? parent.querySelector(_e) : document.querySelector(_e);
};
function countTableHeight(_e, [], _d = true) {
    tableHeight = window.innerHeight - 30;
    return `${tableHeight}`;
}