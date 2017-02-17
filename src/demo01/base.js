var isBool = false;
var str = "str";
var str2 = "str ---> " + str;
var numb = 123;
var arr = [1, 2, 3];
var arr2 = [2, 3, 4];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
