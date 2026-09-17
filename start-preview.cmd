@echo off
rem Sunwood CRM 本地预览服务器（静态站，页面直连 Supabase 云端，行为与生产一致）
rem 启动后访问 http://127.0.0.1:8137/
cd /d "%~dp0public"
echo Sunwood 本地预览: http://127.0.0.1:8137/index.html  (Ctrl+C 停止)
python -m http.server 8137 --bind 127.0.0.1
