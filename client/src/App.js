import React, { useEffect } from "react";
import "./css/gridpage.css";
import randomHexColor from "random-hex-color";
import $ from "jquery";
const App = () => {
  const select = (e) => {
    elements.push(Number(e.target.id));
  };
  useEffect(() => {
    const html = $(
      $.parseHTML(
        '<div id="1" class="greedy" style="background: rgb(135, 180, 43);">1</div><div id="2" class="greedy" style="background: rgb(26, 35, 116);">2</div><div id="3" class="greedy" style="background: rgb(59, 218, 85);">3</div><div id="4" class="greedy" style="background: rgb(183, 243, 72);">4</div><div id="5" class="greedy" style="background: rgb(105, 155, 217);">5</div><div id="6" class="greedy" style="background: rgb(25, 168, 77);">6</div><div id="7" class="greedy" style="background: rgb(4, 69, 130);">7</div><div id="8" class="greedy" style="background: rgb(146, 17, 136);">8</div><div id="9" class="greedy" style="background: rgb(83, 1, 233);">9</div><div id="10" class="greedy" style="background: rgb(145, 59, 30);">10</div><div id="11" class="greedy" style="background: rgb(179, 184, 134);">11</div><div id="12" class="greedy" style="background: rgb(56, 6, 91);">12</div><div id="13" class="greedy" style="background: rgb(214, 186, 207);">13</div><div id="14" class="greedy" style="background: rgb(222, 103, 1);">14</div><div id="15" class="greedy" style="background: rgb(42, 10, 160);">15</div><div id="16" class="greedy" style="background: rgb(83, 249, 196);">16</div><div id="17" class="greedy" style="background: rgb(236, 127, 50);">17</div><div id="18" class="greedy" style="background: rgb(1, 190, 223);">18</div><div id="19" class="greedy" style="background: rgb(174, 218, 175);">19</div><div id="20" class="greedy" style="background: rgb(131, 142, 41);">20</div><div id="21" class="greedy" style="background: rgb(15, 114, 100);">21</div><div id="22" class="greedy" style="background: rgb(229, 42, 229);">22</div><div id="23" class="greedy" style="background: rgb(77, 87, 77);">23</div><div id="24" class="greedy" style="background: rgb(152, 21, 109);">24</div><div class="greed" style="grid-area: 3 / 5 / 5 / 7;"><img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"></div><div id="27" class="greedy" style="background: rgb(187, 3, 78);">27</div><div id="28" class="greedy" style="background: rgb(11, 160, 67);">28</div><div id="29" class="greedy" style="background: rgb(183, 156, 245);">29</div><div id="30" class="greedy" style="background: rgb(210, 139, 26);">30</div><div id="31" class="greedy" style="background: rgb(229, 253, 180);">31</div><div id="32" class="greedy" style="background: rgb(204, 232, 207);">32</div><div id="33" class="greedy" style="background: rgb(127, 103, 52);">33</div><div id="34" class="greedy" style="background: rgb(103, 161, 197);">34</div><div id="37" class="greedy" style="background: rgb(195, 153, 215);">37</div><div id="38" class="greedy" style="background: rgb(19, 252, 13);">38</div><div id="39" class="greedy" style="background: rgb(68, 65, 178);">39</div><div id="40" class="greedy" style="background: rgb(231, 167, 238);">40</div><div id="41" class="greedy" style="background: rgb(222, 119, 36);">41</div><div id="42" class="greedy" style="background: rgb(172, 62, 240);">42</div><div id="43" class="greedy" style="background: rgb(100, 200, 201);">43</div><div id="44" class="greedy" style="background: rgb(14, 171, 31);">44</div><div id="45" class="greedy" style="background: rgb(170, 47, 64);">45</div><div id="46" class="greedy" style="background: rgb(230, 159, 155);">46</div><div id="47" class="greedy" style="background: rgb(97, 62, 95);">47</div><div id="48" class="greedy" style="background: rgb(17, 245, 253);">48</div><div id="49" class="greedy" style="background: rgb(104, 249, 5);">49</div><div id="50" class="greedy" style="background: rgb(70, 252, 38);">50</div><div id="51" class="greedy" style="background: rgb(31, 40, 38);">51</div><div id="52" class="greedy" style="background: rgb(43, 245, 164);">52</div><div id="53" class="greedy" style="background: rgb(219, 231, 141);">53</div><div id="54" class="greedy" style="background: rgb(135, 241, 60);">54</div><div id="55" class="greedy" style="background: rgb(20, 114, 70);">55</div><div id="56" class="greedy" style="background: rgb(102, 250, 33);">56</div><div id="57" class="greedy" style="background: rgb(103, 235, 151);">57</div><div id="58" class="greedy" style="background: rgb(39, 66, 10);">58</div><div id="59" class="greedy" style="background: rgb(28, 149, 72);">59</div><div id="60" class="greedy" style="background: rgb(249, 161, 120);">60</div><div id="61" class="greedy" style="background: rgb(165, 69, 149);">61</div><div id="62" class="greedy" style="background: rgb(190, 243, 151);">62</div><div id="63" class="greedy" style="background: rgb(240, 175, 208);">63</div><div id="64" class="greedy" style="background: rgb(140, 243, 16);">64</div><div id="65" class="greedy" style="background: rgb(118, 126, 188);">65</div><div id="66" class="greedy" style="background: rgb(165, 228, 150);">66</div><div id="67" class="greedy" style="background: rgb(211, 197, 7);">67</div><div id="68" class="greedy" style="background: rgb(129, 16, 47);">68</div><div id="69" class="greedy" style="background: rgb(92, 133, 161);">69</div><div id="70" class="greedy" style="background: rgb(239, 201, 121);">70</div><div id="71" class="greedy" style="background: rgb(171, 0, 161);">71</div><div id="72" class="greedy" style="background: rgb(102, 8, 209);">72</div><div id="73" class="greedy" style="background: rgb(74, 37, 60);">73</div><div id="74" class="greedy" style="background: rgb(114, 8, 206);">74</div><div id="75" class="greedy" style="background: rgb(9, 246, 4);">75</div><div id="76" class="greedy" style="background: rgb(231, 215, 162);">76</div><div id="77" class="greedy" style="background: rgb(91, 112, 199);">77</div><div id="78" class="greedy" style="background: rgb(182, 155, 163);">78</div><div id="79" class="greedy" style="background: rgb(44, 251, 1);">79</div><div id="80" class="greedy" style="background: rgb(101, 52, 169);">80</div><div id="81" class="greedy" style="background: rgb(108, 234, 235);">81</div><div id="82" class="greedy" style="background: rgb(191, 244, 236);">82</div><div id="83" class="greedy" style="background: rgb(238, 30, 87);">83</div><div id="84" class="greedy" style="background: rgb(65, 177, 59);">84</div><div id="85" class="greedy" style="background: rgb(137, 47, 161);">85</div><div id="86" class="greedy" style="background: rgb(232, 43, 253);">86</div><div id="87" class="greedy" style="background: rgb(157, 28, 107);">87</div><div id="88" class="greedy" style="background: rgb(119, 196, 159);">88</div><div id="89" class="greedy" style="background: rgb(5, 144, 129);">89</div><div id="90" class="greedy" style="background: rgb(61, 23, 68);">90</div><div id="91" class="greedy" style="background: rgb(254, 250, 16);">91</div><div id="92" class="greedy" style="background: rgb(170, 216, 20);">92</div><div id="93" class="greedy" style="background: rgb(73, 43, 155);">93</div><div id="94" class="greedy" style="background: rgb(115, 85, 24);">94</div><div id="95" class="greedy" style="background: rgb(18, 38, 230);">95</div><div id="96" class="greedy" style="background: rgb(85, 39, 254);">96</div><div id="97" class="greedy" style="background: rgb(40, 221, 32);">97</div><div id="98" class="greedy" style="background: rgb(49, 234, 190);">98</div><div id="99" class="greedy" style="background: rgb(72, 200, 52);">99</div><div id="100" class="greedy" style="background: rgb(44, 67, 230);">100</div>'
      )
    );
    for (var i = 0; i < html.length; i++) {
      if (html[i].className == "greedy") html[i].onclick = select;
      document.querySelector(".grid").append(html[i]);
    }
  }, []);
  let array = [];
  for (var i = 0; i < 100; i++) {
    array.push(1);
  }
  i = 0;
  let elements = [];

  const logic = () => {
    if (elements.length == 1) {
      let html = document.createElement("div");
      let img = document.createElement("img");
      img.src =
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      html.appendChild(img);
      html.className = "greed";
      var refy = document.getElementById(`${elements[0]}`);
      refy.after(html);
      refy.remove();
      elements = [];
    } else {
      let maxy = Math.max(...elements);

      let miny = Math.min(...elements);
      let r1 = Number(("" + miny)[0]);
      let r2 = Number(("" + maxy)[0]);
      let c1 = Number(("" + miny)[1]);
      let c2 = Number(("" + maxy)[1]);

      if (c1 == 0 && c2 == 0) {
        c1 = c2 = 10;
        r1 = r1 - 1;
        r2 = r2 - 1;
      } else if (c2 == 0) {
        c2 = 10;
        r2 = r2 - 1;
      }
      if (!c1 && !c2) {
        c1 = r1;
        c2 = r2;
        r1 = r2 = 0;
        console.log("working");
      }
      if (!c1 && c2) {
        c1 = r1;
        r1 = 0;
      }
      c2 = c2 + 1;
      r1 = r1 + 1;
      r2 = r2 + 2;
      if (maxy == 100) {
        r2 = 11;
        c2 = 11;
      }
      let row = `${r1}/${r2}`;
      let col = `${c1}/${c2}`;
      let html = document.createElement("div");
      let img = document.createElement("img");
      img.src =
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
      html.appendChild(img);
      html.style.gridColumn = col;
      html.style.gridRow = row;
      html.className = "greed";
      let ref = document.getElementById(`${elements[0]}`);
      ref.after(html);
      for (var i = 0; i < elements.length; i++) {
        document.getElementById(`${elements[i]}`).remove();
      }
      elements = [];
    }
    console.log(document.querySelector(".grid").innerHTML);
  };
  return (
    <div>
      <div className="grid"></div>
      <button onClick={logic}>submit</button>
    </div>
  );
};

export default App;
