const questions = [
  {
    "id": 1,
    "chapter": "一、Linux基础",
    "question": "Linux 操作系统内核的开发者是？",
    "options": [
      "Bell",
      "Thompson",
      "Linus",
      "Dennis"
    ],
    "answer": 2
  },
  {
    "id": 2,
    "chapter": "一、Linux基础",
    "question": "Linux 操作系统安装的时候必须要指定哪个帐号的密码？",
    "options": [
      "Admin",
      "guest",
      "administrator",
      "root"
    ],
    "answer": 3
  },
  {
    "id": 3,
    "chapter": "一、Linux基础",
    "question": "Linux 内核软件许可证是？",
    "options": [
      "GPL",
      "MIT",
      "Apache",
      "BSD"
    ],
    "answer": 0
  },
  {
    "id": 4,
    "chapter": "一、Linux基础",
    "question": "基于我国龙芯CPU的计算机若要安装OpenEuler版本，需要找到哪种构架的系统软件包？",
    "options": [
      "AArch64",
      "LoongArch64",
      "RISC-V",
      "x86_64"
    ],
    "answer": 1
  },
  {
    "id": 5,
    "chapter": "一、Linux基础",
    "question": "Linux 软件源的配置文件在哪个目录中？",
    "options": [
      "/var/repos.d",
      "/etc/yum.repos",
      "/etc/repos.d",
      "/etc/yum.repos.d"
    ],
    "answer": 3
  },
  {
    "id": 6,
    "chapter": "二、文件操作",
    "question": "哪个命令可以查找符合特定条件的文件存放位置？",
    "options": [
      "grep",
      "find",
      "search",
      "go"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "chapter": "二、文件操作",
    "question": "复制命令cp复制文件同时也复制文件的属性，需要添加哪个选项？",
    "options": [
      "-p",
      "-a",
      "-o",
      "-i"
    ],
    "answer": 1
  },
  {
    "id": 8,
    "chapter": "二、文件操作",
    "question": "哪个命令可以修改文件的时间属性？",
    "options": [
      "date",
      "time",
      "setime",
      "touch"
    ],
    "answer": 3
  },
  {
    "id": 9,
    "chapter": "二、文件操作",
    "question": "rm命令删除子目录中的文件需要添加哪个选项？",
    "options": [
      "-f",
      "-s",
      "-r",
      "-d"
    ],
    "answer": 2
  },
  {
    "id": 10,
    "chapter": "二、文件操作",
    "question": "查看文本，支持向前向后翻页的命令是？",
    "options": [
      "cat",
      "head",
      "more",
      "less"
    ],
    "answer": 3
  },
  {
    "id": 11,
    "chapter": "二、文件操作",
    "question": "命令locate找不到某文件，然而这个文件确实存在，解决问题的方法是？",
    "options": [
      "更新数据库",
      "添加搜索路径",
      "重新安装命令",
      "更新系统时间"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "chapter": "二、文件操作",
    "question": "命令tar若要释放一个用gzip压缩过的打包文件，需要添加哪个选项？",
    "options": [
      "-xvf",
      "-cvf",
      "-tzvf",
      "-xzvf"
    ],
    "answer": 3
  },
  {
    "id": 13,
    "chapter": "二、文件操作",
    "question": "命令ln使用选项-b创建一个硬链接文件，如果该链接文件名已经存在，则会？",
    "options": [
      "覆盖原始文件",
      "删除原始文件",
      "创建失败",
      "备份原始文件"
    ],
    "answer": 3
  },
  {
    "id": 14,
    "chapter": "三、文本编辑",
    "question": "以下哪款文本编辑器因其几乎在所有Unix/Linux系统上都默认安装而被称为通用编辑器？",
    "options": [
      "gedit",
      "kedit",
      "vi",
      "VSCode"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "chapter": "三、文本编辑",
    "question": "在vim中，如何从命令模式切换到插入模式以开始编辑文本？",
    "options": [
      "按 : 键",
      "按 i 键",
      "按 Esc 键",
      "按 ZZ 键"
    ],
    "answer": 1
  },
  {
    "id": 16,
    "chapter": "三、文本编辑",
    "question": "在vim的命令模式下，执行哪条命令可以保存文件并退出？",
    "options": [
      ":q!",
      ":w",
      ":wq",
      ":q"
    ],
    "answer": 2
  },
  {
    "id": 17,
    "chapter": "三、文本编辑",
    "question": "你想要使用grep命令在文件log.txt中查找包含单词error的行，并且忽略大小写，应该使用哪个命令？",
    "options": [
      "grep error log.txt",
      "grep -i error log.txt",
      "grep -v error log.txt",
      "grep -n error log.txt"
    ],
    "answer": 1
  },
  {
    "id": 18,
    "chapter": "三、文本编辑",
    "question": "sed命令的核心工作流程是？",
    "options": [
      "一次性将整个文件加载到内存进行处理",
      "逐行读取、处理、输出，再处理下一行",
      "主要用于交互式地编辑文本",
      "只能用于替换文本，不能执行其他操作"
    ],
    "answer": 1
  },
  {
    "id": 19,
    "chapter": "三、文本编辑",
    "question": "在vim中，在命令模式下按下 dd 会执行什么操作？",
    "options": [
      "删除当前光标所在的字符",
      "复制当前行",
      "剪切（删除）当前行",
      "粘贴剪贴板内容"
    ],
    "answer": 2
  },
  {
    "id": 20,
    "chapter": "三、文本编辑",
    "question": "awk命令在处理结构化文本时，如何指定字段的分隔符为冒号:？",
    "options": [
      "awk -F: '{print $1}' /etc/passwd",
      "awk -f: '{print $1}' /etc/passwd",
      "awk '/:/ {print $1}' /etc/passwd",
      "awk '{print $1}' /etc/passwd"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "chapter": "三、文本编辑",
    "question": "如果你想在vim中显示行号，应该在扩展命令模式下输入什么命令？",
    "options": [
      "set cursorline",
      "syntax on",
      "set nonu",
      "set nu"
    ],
    "answer": 3
  },
  {
    "id": 22,
    "chapter": "三、文本编辑",
    "question": "grep命令的-v选项的作用是什么？",
    "options": [
      "显示匹配行的行号",
      "忽略匹配时的大小写差异",
      "显示不被模式匹配到的行（反向选择）",
      "只输出匹配到的字符串部分"
    ],
    "answer": 2
  },
  {
    "id": 23,
    "chapter": "三、文本编辑",
    "question": "在Vim的命令模式下，按下 $ 键可以实现什么功能？",
    "options": [
      "跳转到当前行的行首",
      "跳转到当前行的行尾",
      "跳转到文件的第一行",
      "跳转到文件的最后一行"
    ],
    "answer": 1
  },
  {
    "id": 24,
    "chapter": "四、用户与权限",
    "question": "在Linux系统中，用于唯一标识一个用户，并且系统在登录时真正用来区分用户的是？",
    "options": [
      "用户名",
      "用户主目录",
      "用户ID（UID）",
      "登录Shell"
    ],
    "answer": 2
  },
  {
    "id": 25,
    "chapter": "四、用户与权限",
    "question": "以下关于UID的叙述中，哪一项是正确的？",
    "options": [
      "root用户的UID是1",
      "所有普通用户的UID都必须大于1000",
      "UID为1-999之间的用户通常是系统用户，不可交互登录",
      "一个UID可以同时分配给多个不同的用户名"
    ],
    "answer": 2
  },
  {
    "id": 26,
    "chapter": "四、用户与权限",
    "question": "管理员想要创建一个名为testuser的新用户，并指定其主目录为/opt/testuser，应该使用以下哪个命令？",
    "options": [
      "useradd -m testuser",
      "useradd -d /opt/testuser testuser",
      "usermod -d /opt/testuser testuser",
      "useradd -s /opt/testuser testuser"
    ],
    "answer": 1
  },
  {
    "id": 27,
    "chapter": "四、用户与权限",
    "question": "在Linux中，使用ls -l命令查看一个文件的详细信息，显示为-rwxr--r--。这表示？",
    "options": [
      "文件所有者有读、写、执行权限；所属组有读、写权限；其他用户有读权限",
      "文件所有者有读、写、执行权限；所属组有读权限；其他用户有读权限",
      "文件所有者有读、写权限；所属组有读、执行权限；其他用户有执行权限",
      "这是一个目录，所有者有全部权限"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "chapter": "四、用户与权限",
    "question": "命令 chmod 755 filename 的效果等同于下列哪一项？",
    "options": [
      "chmod u=rwx, g=rx, o=rx filename",
      "chmod u=rw, g=r, o=r filename",
      "chmod a+rwx filename",
      "chmod o+w filename"
    ],
    "answer": 0
  },
  {
    "id": 29,
    "chapter": "四、用户与权限",
    "question": "以下哪个文件存储了所有用户的加密密码信息，并且通常只有root用户才有权限读取？",
    "options": [
      "/etc/passwd",
      "/etc/group",
      "/etc/shadow",
      "/etc/gshadow"
    ],
    "answer": 2
  },
  {
    "id": 30,
    "chapter": "四、用户与权限",
    "question": "如果想要将文件 file.txt 的所有者更改为用户 john，应该使用哪个命令？",
    "options": [
      "chgrp john file.txt",
      "chmod john file.txt",
      "chown john file.txt",
      "usermod -o john file.txt"
    ],
    "answer": 2
  },
  {
    "id": 31,
    "chapter": "四、用户与权限",
    "question": "umask 设置用于解决什么问题？",
    "options": [
      "提供个性化的默认文件或者目录权限",
      "提供比传统UGO模型更精细的权限控制",
      "替代 /etc/passwd 和 /etc/shadow 文件",
      "用于加密文件内容"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "chapter": "四、用户与权限",
    "question": "普通用户想要临时以root权限执行一条系统管理命令（如 fdisk -l），最安全推荐的做法是？",
    "options": [
      "直接使用 su 命令切换到root用户再执行",
      "使用 su - 命令切换到root用户再执行",
      "使用 sudo fdisk -l 命令",
      "让管理员告知root密码，用root登录后执行"
    ],
    "answer": 2
  },
  {
    "id": 33,
    "chapter": "四、用户与权限",
    "question": "使用 userdel 命令删除一个用户时，如果希望同时删除该用户的主目录和邮件池，应该添加哪个选项？",
    "options": [
      "-f",
      "-r",
      "-h",
      "-Z"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "chapter": "五、软件管理",
    "question": "在Linux系统中，使用以下哪个命令可以查询已安装的所有软件包？",
    "options": [
      "rpm -i",
      "rpm -e",
      "rpm -qa",
      "rpm -qf"
    ],
    "answer": 2
  },
  {
    "id": 35,
    "chapter": "五、软件管理",
    "question": "若你想知道某个特定文件属于哪个软件包，应使用下列哪个命令？",
    "options": [
      "rpm -a",
      "rpm -qf &lt;文件路径&gt;",
      "rpm -i &lt;文件路径&gt;",
      "rpm -Uvh &lt;文件路径&gt;"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "chapter": "五、软件管理",
    "question": "使用rpm命令卸载软件包时，应使用的选项是？",
    "options": [
      "-i",
      "-e",
      "-U",
      "-q"
    ],
    "answer": 1
  },
  {
    "id": 37,
    "chapter": "五、软件管理",
    "question": "下列哪一个是获取.rpm软件包的有效资源网站？",
    "options": [
      "https://www.debian.org/",
      "https://yum.oracle.com/",
      "https://rpmfind.net/",
      "https://archlinux.org/"
    ],
    "answer": 2
  },
  {
    "id": 38,
    "chapter": "五、软件管理",
    "question": "在使用make命令编译源代码前，一般会先执行什么命令？",
    "options": [
      "install",
      "configure",
      "build",
      "compile"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "chapter": "五、软件管理",
    "question": "systemctl 命令主要用于管理什么？",
    "options": [
      "用户账户",
      "系统服务",
      "文件权限",
      "网络连接"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "chapter": "五、软件管理",
    "question": "启动名为httpd的服务，应使用以下哪个命令？",
    "options": [
      "systemctl start httpd.service",
      "service httpd start",
      "/etc/init.d/httpd start",
      "init httpd start"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "chapter": "六、磁盘与分区",
    "question": "下列哪种分区类型是较早使用的传统分区方式？",
    "options": [
      "GPT",
      "MBR",
      "LVM",
      "EXT4"
    ],
    "answer": 1
  },
  {
    "id": 42,
    "chapter": "六、磁盘与分区",
    "question": "在Linux中，下列哪个命令用于创建EXT4类型的文件系统？",
    "options": [
      "mkfs.ext3",
      "mkfs.xfs",
      "mkfs.ext4",
      "fsck.ext4"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "chapter": "六、磁盘与分区",
    "question": "Linux 中常见的文件系统类型不包括以下哪一项？",
    "options": [
      "EXT3",
      "FAT32",
      "EXT4",
      "XFS"
    ],
    "answer": 1
  },
  {
    "id": 44,
    "chapter": "六、磁盘与分区",
    "question": "下面哪一个不属于LVM的基本组成部分？",
    "options": [
      "物理卷(PV)",
      "卷组(VG)",
      "逻辑卷(LV)",
      "分区表(PT)"
    ],
    "answer": 3
  },
  {
    "id": 45,
    "chapter": "六、磁盘与分区",
    "question": "Swap分区的主要用途是什么？",
    "options": [
      "存储临时文件",
      "提供虚拟内存空间",
      "安装操作系统",
      "存放日志文件"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "chapter": "六、磁盘与分区",
    "question": "使用fdisk工具进行分区时，默认最多可划分几个主分区？",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2
  },
  {
    "id": 47,
    "chapter": "六、磁盘与分区",
    "question": "下列哪项描述最准确地解释了逻辑卷的概念？",
    "options": [
      "一块独立的硬盘",
      "多个物理卷组合后的虚拟磁盘",
      "一个单独的分区",
      "一种文件系统类型"
    ],
    "answer": 1
  },
  {
    "id": 48,
    "chapter": "六、磁盘与分区",
    "question": "下列哪个命令可用于查看磁盘分区情况？",
    "options": [
      "df -h",
      "lsblk",
      "mount",
      "fdisk -l"
    ],
    "answer": 3
  },
  {
    "id": 49,
    "chapter": "六、磁盘与分区",
    "question": "创建卷组之前，必须先完成什么操作？",
    "options": [
      "格式化硬盘",
      "建立物理卷",
      "划分逻辑卷",
      "设置交换分区"
    ],
    "answer": 1
  },
  {
    "id": 50,
    "chapter": "六、磁盘与分区",
    "question": "下列哪个命令用于将逻辑卷挂载到文件系统？",
    "options": [
      "lvcreate",
      "vgextend",
      "mount",
      "pvdisplay"
    ],
    "answer": 2
  },
  {
    "id": 51,
    "chapter": "六、磁盘与分区",
    "question": "下列哪种分区方式支持更多的分区数量？",
    "options": [
      "MBR",
      "GPT",
      "LVM",
      "EXT4"
    ],
    "answer": 1
  },
  {
    "id": 52,
    "chapter": "六、磁盘与分区",
    "question": "下列哪个命令用于显示卷组的信息？",
    "options": [
      "lvdisplay",
      "vgdisplay",
      "pvdisplay",
      "lvs"
    ],
    "answer": 1
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "管理员希望设置一个在明天上午10点整执行一次的系统备份脚本 /backup.sh，应该使用以下哪个命令？",
    "options": [
      "cron 10:00 tomorrow /backup.sh",
      "at 10:00 tomorrow &lt; /backup.sh",
      "at 10:00 tomorrow &lt;&lt; EOF /backup.sh EOF",
      "at 10:00 tomorrow &lt;&lt; EOF bash /backup.sh EOF"
    ],
    "answer": 1,
    "id": 53
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "在Linux系统中，用户自定义的周期性计划任务（cronjob）默认保存在哪个目录下？",
    "options": [
      "/etc/cron.d/",
      "/etc/crontab",
      "/var/spool/cron/",
      "/var/log/cron"
    ],
    "answer": 2,
    "id": 54
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "以下哪条crontab表达式表示每周一到周五的下午2点30分执行一次？",
    "options": [
      "30 14 * * 1-5 /script.sh",
      "30 2 * * 1,2,3,4,5 /script.sh",
      "30 14 * * 0-4 /script.sh",
      "30 2 * * mon-fri /script.sh"
    ],
    "answer": 0,
    "id": 55
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "网络接口配置文件中，哪个参数用于指定获取IP地址的方式为DHCP？",
    "options": [
      "IPADDR=dhcp",
      "BOOTPROTO=dhcp",
      "METHOD=dhcp",
      "ONBOOT=dhcp"
    ],
    "answer": 1,
    "id": 56
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "使用 ip 命令临时为一个已启用的网卡 ens33 添加一个辅助IP地址 192.168.1.100/24，正确的命令是？",
    "options": [
      "ip address add 192.168.1.100/24 dev ens33",
      "ip addr set 192.168.1.100/24 on ens33",
      "ifconfig ens33:0 192.168.1.100 netmask 255.255.255.0",
      "nmcli dev mod ens33 ipv4.addresses 192.168.1.100/24"
    ],
    "answer": 0,
    "id": 57
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "以下哪个 nmcli 子命令用于创建一个名为 mycon 的新网络连接，并指定其IP地址为静态 10.0.0.10/24 和网关 10.0.0.1？",
    "options": [
      "nmcli connection add mycon type ethernet ip4 10.0.0.10/24 gw4 10.0.0.1",
      "nmcli dev connect mycon ip4 10.0.0.10/24 gw4 10.0.0.1",
      "nmcli con add con-name mycon type ethernet ifname ens33 ip4 10.0.0.10/24 gw4 10.0.0.1",
      "nmcli con mod mycon ipv4.addresses 10.0.0.10/24 ipv4.gateway 10.0.0.1"
    ],
    "answer": 2,
    "id": 58
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "使用 ps 命令时，以下哪组选项组合可以显示系统中所有进程的详细信息，包括其所有者、CPU 和内存占用率？",
    "options": [
      "ps -l",
      "ps -ef",
      "ps aux",
      "ps -e"
    ],
    "answer": 2,
    "id": 59
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "在 top 命令的交互界面中，要按照CPU使用率对进程进行排序，应该按下哪个键？",
    "options": [
      "M (按内存排序)",
      "P (按CPU排序)",
      "T (按时间排序)",
      "N (按PID排序)"
    ],
    "answer": 1,
    "id": 60
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "一个进程的nice值为15。这意味着什么？",
    "options": [
      "该进程拥有非常高的CPU调度优先级",
      "该进程拥有非常低的CPU调度优先级",
      "该进程的PID是15",
      "该进程已经运行了15分钟"
    ],
    "answer": 1,
    "id": 61
  },
  {
    "chapter": "七、计划任务与网络",
    "question": "管理员希望将PID为3045的进程的nice值调整为5，应该使用以下哪个命令？",
    "options": [
      "nice -n 5 -p 3045",
      "renice -n 5 3045",
      "priority --set 5 3045",
      "ps -q 3045 --nice=5"
    ],
    "answer": 1,
    "id": 62
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "执行Shell脚本的正确命令是？",
    "options": [
      "run script.sh",
      "./script.sh",
      "execute script.sh",
      "start script.sh"
    ],
    "answer": 1,
    "id": 63
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "以下哪个符号用于将命令输出重定向到文件（覆盖原有内容）？",
    "options": [
      "&gt;&gt;",
      "&gt;",
      "&lt;",
      "|"
    ],
    "answer": 1,
    "id": 64
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "管道符|的作用是？",
    "options": [
      "将一个命令的输出作为另一个命令的输入",
      "将文件内容重定向到命令",
      "追加命令输出到文件",
      "终止脚本执行"
    ],
    "answer": 0,
    "id": 65
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "以下哪个是Shell中的特殊字符，表示单个字符的通配符？",
    "options": [
      "?",
      "*",
      "#",
      "$"
    ],
    "answer": 0,
    "id": 66
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "定义Shell变量时，等号 = 两边是否可以有空格？",
    "options": [
      "可以",
      "不可以",
      "取决于Shell类型",
      "仅在变量赋值时允许"
    ],
    "answer": 1,
    "id": 67
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "shell 执行算术运算 3+5 的正确写法是？",
    "options": [
      "3 + 5",
      "$[3+5]",
      "expr (3 + 5)",
      "[3+5]"
    ],
    "answer": 1,
    "id": 68
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "以下哪种方式可以调试Shell脚本？",
    "options": [
      "使用-x选项运行脚本",
      "在脚本中插入echo语句",
      "使用set -x启用调试模式",
      "以上都是"
    ],
    "answer": 3,
    "id": 69
  },
  {
    "chapter": "八、Shell脚本基础",
    "question": "以下哪个符号表示注释？",
    "options": [
      "//",
      "#",
      "--",
      ";"
    ],
    "answer": 1,
    "id": 70
  },
  {
    "chapter": "九、Samba服务",
    "question": "Samba服务的主要功能是什么？",
    "options": [
      "提供DNS域名解析服务",
      "实现Linux与Windows系统间的文件和打印机共享",
      "作为Web服务器托管网站",
      "管理Linux系统的用户和组"
    ],
    "answer": 1,
    "id": 71
  },
  {
    "chapter": "九、Samba服务",
    "question": "Samba服务中，负责管理共享目录、打印机和处理数据传输的核心进程是？",
    "options": [
      "nmbd",
      "smbd",
      "httpd",
      "sshd"
    ],
    "answer": 1,
    "id": 72
  },
  {
    "chapter": "九、Samba服务",
    "question": "Samba的主配置文件是？",
    "options": [
      "/etc/samba/smbpasswd",
      "/etc/samba/smb.conf",
      "/var/log/samba/log.smbd",
      "/etc/samba/samba.users"
    ],
    "answer": 1,
    "id": 73
  },
  {
    "chapter": "九、Samba服务",
    "question": "在smb.conf配置文件中，以下哪个参数用于设置共享资源的描述信息？",
    "options": [
      "path =",
      "comment =",
      "public =",
      "valid users ="
    ],
    "answer": 1,
    "id": 74
  },
  {
    "chapter": "九、Samba服务",
    "question": "管理员希望创建一个名为share的共享，只允许销售组（sales）的用户访问，应该在smb.conf的共享段中设置哪个参数？",
    "options": [
      "write list = @sales",
      "valid users = @sales",
      "hosts allow = sales",
      "path = /sales"
    ],
    "answer": 1,
    "id": 75
  },
  {
    "chapter": "九、Samba服务",
    "question": "在为Samba服务器添加用户时，以下哪个命令是正确的？（假设已存在同名的Linux系统用户user1）",
    "options": [
      "useradd -a user1",
      "smbpasswd -a user1",
      "passwd user1",
      "samba-user user1"
    ],
    "answer": 1,
    "id": 76
  },
  {
    "chapter": "九、Samba服务",
    "question": "从一台Linux客户端上，查看Samba服务器（IP为192.168.1.100）上所有可用共享列表的命令是？",
    "options": [
      "smbclient -L 192.168.1.100",
      "smbclient //192.168.1.100/share",
      "mount -t cifs //192.168.1.100/share /mnt",
      "ls //192.168.1.100/"
    ],
    "answer": 0,
    "id": 77
  },
  {
    "chapter": "九、Samba服务",
    "question": "为了保证Samba服务能被网络中的客户端正常访问，防火墙需要放行哪个服务？",
    "options": [
      "firewall-cmd --add-service=ssh",
      "firewall-cmd --add-service=http",
      "firewall-cmd --add-service=samba",
      "firewall-cmd --add-service=ftp"
    ],
    "answer": 2,
    "id": 78
  },
  {
    "chapter": "九、Samba服务",
    "question": "客户端能连接到Samba共享并能看到文件，但无法创建新文件或修改现有文件。以下哪项是最不可能的原因？",
    "options": [
      "共享配置中设置了 writable=no",
      "共享目录的Linux文件系统权限是755（所有者root）",
      "SELinux 阻止了写操作",
      "客户端输入的密码错误"
    ],
    "answer": 3,
    "id": 79
  },
  {
    "chapter": "九、Samba服务",
    "question": "为了实现Samba共享目录的自动化每日备份，最佳实践是将备份脚本加入到哪个系统中？",
    "options": [
      "使用 at 命令设置一次性的定时任务",
      "编辑 /etc/samba/smb.conf 文件中的 log file 字段",
      "使用 cron 设置周期性的定时任务",
      "手动每天执行备份脚本"
    ],
    "answer": 2,
    "id": 80
  },
  {
    "chapter": "十、DNS服务",
    "question": "在openEuler系统中安装Bind DNS服务器的常用命令是？",
    "options": [
      "apt install bind9",
      "yum install dns",
      "dnf install bind",
      "zypper install bind"
    ],
    "answer": 2,
    "id": 81
  },
  {
    "chapter": "十、DNS服务",
    "question": "Bind的主配置文件通常位于以下哪个路径？",
    "options": [
      "/etc/bind/named.conf",
      "/etc/named.conf",
      "/etc/dns/bind.conf",
      "/var/named/named.conf"
    ],
    "answer": 0,
    "id": 82
  },
  {
    "chapter": "十、DNS服务",
    "question": "在named.conf中，用于指定区域文件（Zone File）的配置指令是？",
    "options": [
      "zone",
      "file",
      "domain",
      "record"
    ],
    "answer": 1,
    "id": 83
  },
  {
    "chapter": "十、DNS服务",
    "question": "以下哪个文件可能用于定义正向解析区域（Forward Lookup Zone）？",
    "options": [
      "/etc/bind/zones.rfc1918",
      "/var/named/db.example.com",
      "/etc/named.dns.zones",
      "/etc/resolv.conf"
    ],
    "answer": 1,
    "id": 84
  },
  {
    "chapter": "十、DNS服务",
    "question": "在区域文件中，@符号代表什么？",
    "options": [
      "区域域名",
      "任意主机名",
      "默认网关",
      "本地回环地址"
    ],
    "answer": 0,
    "id": 85
  },
  {
    "chapter": "十、DNS服务",
    "question": "以下哪个参数用于在named.conf中启用递归查询？",
    "options": [
      "allow-recursion",
      "recursion yes;",
      "query on;",
      "dnssec-validation auto;"
    ],
    "answer": 1,
    "id": 86
  },
  {
    "chapter": "十、DNS服务",
    "question": "检查Bind配置文件语法错误的命令是？",
    "options": [
      "named-checkconf",
      "dns-check",
      "bind-verify",
      "check-named"
    ],
    "answer": 0,
    "id": 87
  },
  {
    "chapter": "十、DNS服务",
    "question": "客户端验证DNS解析是否成功的命令是？",
    "options": [
      "netstat example.com",
      "nslookup example.com",
      "traceroute example.com",
      "ifconfig example.com"
    ],
    "answer": 1,
    "id": 88
  },
  {
    "chapter": "十、DNS服务",
    "question": "在区域文件中，IN NS记录的作用是？",
    "options": [
      "定义邮件服务器",
      "定义域名服务器",
      "定义IPv6地址",
      "定义别名"
    ],
    "answer": 1,
    "id": 89
  },
  {
    "chapter": "十、DNS服务",
    "question": "以下哪个工具用于测试DNS查询的详细过程？",
    "options": [
      "dig example.com",
      "host example.com",
      "whois example.com",
      "netstat example.com"
    ],
    "answer": 0,
    "id": 90
  },
  {
    "chapter": "十、DNS服务",
    "question": "配置备份域名服务器时，需要在主服务器的named.conf中设置什么？",
    "options": [
      "allow-transfer",
      "recursion yes;",
      "slave-zone",
      "forwarders"
    ],
    "answer": 0,
    "id": 91
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "HTTP协议默认使用的端口号是？",
    "options": [
      "21",
      "25",
      "80",
      "443"
    ],
    "answer": 2,
    "id": 92
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "在Linux系统中，使用以下哪个命令可以安装Apache HTTP服务器（httpd）？",
    "options": [
      "dnf install apache",
      "dnf install httpd",
      "yum install web-server",
      "apt-get install apache2"
    ],
    "answer": 1,
    "id": 93
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "Apache服务器的主配置文件是？",
    "options": [
      "/etc/httpd/conf.d/vhost.conf",
      "/etc/httpd/conf/httpd.conf",
      "/var/www/html/index.html",
      "/usr/share/doc/httpd/README"
    ],
    "answer": 1,
    "id": 94
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "管理员希望将网站的默认首页从index.html改为home.html，他应该修改主配置文件中的哪个参数？",
    "options": [
      "DocumentRoot",
      "ServerName",
      "DirectoryIndex",
      "Listen"
    ],
    "answer": 2,
    "id": 95
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "客户端在浏览器中访问用户alice的个人主页，正确的URL格式是？",
    "options": [
      "http://服务器IP/alice",
      "http://服务器IP/~alice",
      "http://服务器IP/home/alice",
      "http://服务器IP/public_html/alice"
    ],
    "answer": 1,
    "id": 96
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "要创建一个名为/data的虚拟目录，其实际对应的物理路径是/srv/www/data，应该在配置文件中使用以下哪个指令？",
    "options": [
      "Redirect /data /srv/www/data",
      "Alias /data \"/srv/www/data\"",
      "DocumentRoot /srv/www/data",
      "VirtualHost /data /srv/www/data"
    ],
    "answer": 1,
    "id": 97
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "配置完成后，客户端访问网站时出现403 Forbidden错误，以下哪项是最不可能的原因？",
    "options": [
      "SELinux 处于强制模式并阻止了访问",
      "防火墙阻止了HTTP流量",
      "网站目录的Linux文件系统权限不允许其他用户读取",
      "输入的URL地址错误"
    ],
    "answer": 3,
    "id": 98
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "在一台服务器上配置多个基于不同IP地址的网站，需要使用以下哪种配置结构？",
    "options": [
      "&lt;Directory&gt; ... &lt;/Directory&gt;",
      "&lt;VirtualHost IP地址:端口&gt; ... &lt;/VirtualHost&gt;",
      "&lt;Location&gt; ... &lt;/Location&gt;",
      "&lt;IfModule&gt; ... &lt;/IfModule&gt;"
    ],
    "answer": 1,
    "id": 99
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "为了让HTTP服务能够通过防火墙，管理员应该执行以下哪条命令？",
    "options": [
      "firewall-cmd --add-port=80/tcp",
      "firewall-cmd --add-service=ssh",
      "firewall-cmd --add-service=http",
      "firewall-cmd --add-service=ftp"
    ],
    "answer": 2,
    "id": 100
  },
  {
    "chapter": "十一、Apache HTTP服务",
    "question": "在配置虚拟主机或个人主页后，Apache服务器需要如何操作才能使新的配置生效？",
    "options": [
      "重启Linux服务器",
      "重启httpd服务 (systemctl restart httpd)",
      "只需保存配置文件，Apache会自动重载",
      "关闭并重新打开浏览器"
    ],
    "answer": 1,
    "id": 101
  },
  {
    "chapter": "十二、FTP服务",
    "question": "FTP 协议默认使用的端口是？",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ],
    "answer": 1,
    "id": 102
  },
  {
    "chapter": "十二、FTP服务",
    "question": "FTP 协议的两种工作模式是？",
    "options": [
      "主动模式和被动模式",
      "本地模式和远程模式",
      "用户模式和管理员模式",
      "TCP模式和UDP模式"
    ],
    "answer": 0,
    "id": 103
  },
  {
    "chapter": "十二、FTP服务",
    "question": "在openEuler 系统中，安装 vsftpd 服务器的命令是？",
    "options": [
      "apt install vsftpd",
      "dnf install vsftpd",
      "apt-get install vsftpd",
      "以上都可以"
    ],
    "answer": 1,
    "id": 104
  },
  {
    "chapter": "十二、FTP服务",
    "question": "vsftpd 的主配置文件是？",
    "options": [
      "/etc/vsftpd.conf",
      "/etc/ftp.conf",
      "/etc/vsftpd/vsftpd.conf",
      "/etc/ftpd.conf"
    ],
    "answer": 2,
    "id": 105
  },
  {
    "chapter": "十二、FTP服务",
    "question": "在 vsftpd 中，启用匿名用户登录的配置项是？",
    "options": [
      "anonymous_enable=YES",
      "local_enable=YES",
      "write_enable=YES",
      "chroot_local_user=YES"
    ],
    "answer": 0,
    "id": 106
  },
  {
    "chapter": "十二、FTP服务",
    "question": "在 vsftpd 中，限制本地用户只能访问其家目录的配置项是？",
    "options": [
      "chroot_local_user=YES",
      "local_root=/home",
      "local_enable=YES",
      "userlist_enable=YES"
    ],
    "answer": 0,
    "id": 107
  },
  {
    "chapter": "十二、FTP服务",
    "question": "在 openEuler的vsftpd 服务中，虚拟用户的认证数据库通常使用？",
    "options": [
      "PAM",
      "MySQL",
      "LDAP",
      "GDBM"
    ],
    "answer": 0,
    "id": 108
  },
  {
    "chapter": "十二、FTP服务",
    "question": "在 vsftpd 中，允许本地用户登录的配置项是？",
    "options": [
      "local_enable=YES",
      "anonymous_enable=YES",
      "write_enable=YES",
      "chroot_local_user=YES"
    ],
    "answer": 0,
    "id": 109
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "Linux系统上传统的访问控制机制，其权限基于文件所有者和进程的UID，这种机制被称为？",
    "options": [
      "强制访问控制(MAC)",
      "自主访问控制(DAC)",
      "基于角色的访问控制(RBAC)",
      "防火墙控制"
    ],
    "answer": 1,
    "id": 110
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "SELinux (Security-Enhanced Linux) 主要实现了哪种访问控制模型来增强系统安全？",
    "options": [
      "自主访问控制 (DAC)",
      "强制访问控制 (MAC)",
      "基于规则的访问控制",
      "网络访问控制列表 (ACL)"
    ],
    "answer": 1,
    "id": 111
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "在SELinux中，当一个进程尝试访问一个文件时，执行检查并授予或拒绝访问的核心组件是？",
    "options": [
      "防火墙守护进程 (firewalld)",
      "SELinux 安全服务器 (Security Server)",
      "Linux 内核模块",
      "系统日志守护进程 (syslogd)"
    ],
    "answer": 1,
    "id": 112
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "管理员希望查看当前SELinux的运行模式（是强制、宽容还是禁用），应该使用以下哪个命令？",
    "options": [
      "sestatus",
      "systemctl status selinux",
      "firewall-cmd --get-selinux",
      "getenforce"
    ],
    "answer": 3,
    "id": 113
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "使用 firewall-cmd 配置规则时，如果希望配置的规则在系统重启后依然生效，需要添加以下哪个选项？",
    "options": [
      "--runtime",
      "--immediate",
      "--permanent",
      "--persistent"
    ],
    "answer": 2,
    "id": 114
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "添加了--permanent选项的防火墙规则，如何使其立即生效，而无需重启系统或服务？",
    "options": [
      "执行 systemctl restart firewalld",
      "执行 firewall-cmd --reload",
      "执行 setenforce 1",
      "规则会自动立即生效"
    ],
    "answer": 1,
    "id": 115
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "要查看Linux系统中一个文件（如 /etc/passwd）的SELinux安全上下文，应该使用以下哪个命令？",
    "options": [
      "ls -l /etc/passwd",
      "ls -Z /etc/passwd",
      "cat /etc/passwd | grep context",
      "sestatus -f /etc/passwd"
    ],
    "answer": 1,
    "id": 116
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "SELinux安全上下文中，最关键的一个字段，用于定义进程类型和文件类型，并据此制定访问规则的是？",
    "options": [
      "user",
      "role",
      "type",
      "sensitivity"
    ],
    "answer": 2,
    "id": 117
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "如果希望临时将SELinux从强制模式（Enforcing）切换到宽容模式（Permissive），应该使用以下哪条命令？",
    "options": [
      "setenforce Enforcing",
      "setenforce 1",
      "setenforce Permissive",
      "setenforce 0"
    ],
    "answer": 3,
    "id": 118
  },
  {
    "chapter": "十三、SELinux与防火墙",
    "question": "使用 chcon 命令修改文件的安全上下文后，如何操作可能导致这些修改被恢复为默认值？",
    "options": [
      "重启 firewalld 服务",
      "系统执行文件系统重新标记（如使用 restorecon 命令或下次启动时）",
      "切换SELinux运行模式",
      "修改文件的所有者"
    ],
    "answer": 1,
    "id": 119
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell中用于比较两个字符串是否相等的运算符是？",
    "options": [
      "==",
      "=",
      "eq",
      "equal"
    ],
    "answer": 0,
    "id": 120
  },
  {
    "chapter": "十四、Shell高级",
    "question": "下列哪个选项表示大于等于的关系运算符？",
    "options": [
      "-ge",
      "-gt",
      "-le",
      "-lt"
    ],
    "answer": 0,
    "id": 121
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell中用于执行多分支条件判断的关键字是？",
    "options": [
      "if else",
      "case esac",
      "for do done",
      "while do done"
    ],
    "answer": 1,
    "id": 122
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 脚本中定义函数的基本语法是？",
    "options": [
      "function name { ... }",
      "def name() { ... }",
      "func name { ... }",
      "name() [ ... ]"
    ],
    "answer": 0,
    "id": 123
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 中用于循环遍历数组元素的语句是？",
    "options": [
      "until",
      "while",
      "for in",
      "do while"
    ],
    "answer": 2,
    "id": 124
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 中用于捕获命令退出状态码的特殊变量是？",
    "options": [
      "$?",
      "$!",
      "$*",
      "$@"
    ],
    "answer": 0,
    "id": 125
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 脚本中，哪一个是合法的变量赋值方式？",
    "options": [
      "var = 10",
      "var=10",
      "set var=10",
      "assign var=10"
    ],
    "answer": 1,
    "id": 126
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 中用于将多个命令组合在一起执行的是哪个符号？",
    "options": [
      ";",
      ",",
      "&",
      ""
    ],
    "answer": 0,
    "id": 127
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 中用于读取用户输入的内置命令是？",
    "options": [
      "read",
      "input",
      "get",
      "scan"
    ],
    "answer": 0,
    "id": 128
  },
  {
    "chapter": "十四、Shell高级",
    "question": "Shell 脚本中，如何向函数传递参数？",
    "options": [
      "使用 $1, $2等变量",
      "在函数定义中声明参数",
      "使用args[]数组",
      "以上都可以"
    ],
    "answer": 0,
    "id": 129
  }
];