# 引入let

- 作用域规则不同
  -  变量定义在if作用域里面，但在外面也是可以访问的
  ```
        function f(shouldInitialize: boolean) {
            if (shouldInitialize) {
                var x = 10;
            }

            return x;
        }

        f(true);  // returns '10'
        f(false); // returns 'undefined'
    ```

   - 可以多次声明同一变量,会影响外部变量  [执行结果](src/demo01/let.js)
   ```
        function sumMatrix(matrix: number[][]) {
            var sum = 0;
            for (var i = 0; i < matrix.length; i++) {
                var currentRow = matrix[i];
                for (var i = 0; i < currentRow.length; i++) {
                    sum += currentRow[i];
                }
            }

            return sum;
        }
   ```

    - 对于异步函数
    ```
    for (var i = 0; i < 10; i++) {
         setTimeout(function() { console.log(i); }, 100 * i);
    }


   <!--立即执行的函数表达式（IIFE）-->
    for (var i = 0; i < 10; i++) {
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }


    for (let i = 0; i < 10 ; i++) {
         setTimeout(function() {console.log(i); }, 100 * i);
    }
    ```