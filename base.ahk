#Requires AutoHotkey v2.0

; === グローバル変数 ===
global layer := 0
HoldThreshold := 100

SetLayer(val) {
    global layer
    layer := val
}

; === スペースキー処理 ===
$*Space::
{
    start := A_TickCount
    while GetKeyState("Space", "P") {
        if (A_TickCount - start > HoldThreshold) {
            SetLayer(1)
            return
        }
        Sleep(10)
    }
    Send(" ")
}
$*Space Up:: SetLayer(0)

; === 変換キー（Enter）処理：Shift同時押し対策済み ===
$*vk1C::
{
    if (layer = 1) {
        Send("{Tab}")
    } else {
        ; Shiftが押されていてもEnterを送る（押下＋解放）
        SendEvent("{Blind}{Enter down}")
        Sleep(30)
        SendEvent("{Blind}{Enter up}")
    }
}

; === 無変換キー ===
$*vk1D::
{
    if (layer = 1)
        Send("{Delete}")
    else
        Send("{Backspace}")
}

; === レイヤー1のリマップ ===
#HotIf (layer = 1)

j::Send("-")
k::Send("=")
s::Send("{Left}")
d::Send("{Down}")
f::Send("{Right}")
e::Send("{Up}")
w::Send("{Home}")
r::Send("{End}")
t::Send("[")
y::Send("]")
g::Send("(")
h::Send(")")
v::Send("+7")
n::Send("+2")

#HotIf
