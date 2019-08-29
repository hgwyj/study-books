   //找到顶层父级窗口
   this._win = (function (p, c) {
      while (p != c) {
        c = p
        p = p.parent
       }
       return c
    })(window.parent, window);
   //第二种方法
   this._win = window.top;