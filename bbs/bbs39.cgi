#!/usr/bin/perl

###############################################
#   bbs39.cgi
#      V3.0 (2010.11.28)
#                     Copyright(C) CGI-design
###############################################

require './cgi-lib.pl';
require './jcode.pl';
require './mimew.pl';

$script = 'bbs39.cgi';
$base = './bbsdata';				#データ格納ディレクトリ
$bbsfile = "$base/bbs.txt";			#記事
$nofile = "$base/no.txt";			#記事番号
$wordfile = "$base/word.txt";		#禁止語
$hostfile = "$base/host.txt";		#拒否ホスト
$opfile = "$base/option.txt";
$lockfile = "$base/lock";
$cgi_lib'maxdata = 400000;			#入力最大容量（byte）

open (IN,"$opfile") || &error("OPEN ERROR");	$opdata = <IN>;		close IN;
if (!$opdata) {
	$pass = &crypt('cgi');
	open (OUT,">$opfile") || &error("OPEN ERROR");
	print OUT "$pass<>掲示板<><><><><>$base<>$base<><>/usr/sbin/sendmail<>#fafaf5,#000000,#c00000,#000000,#800000,#ffffff<>#c7c7a8,#e6c9a2,#a8b7c7,#a8c7c4,#a8c7a8,#ccccff,#cc9999,#b8a8c7<>5<>100<>700<>3<>150";
	close OUT;
}

###　メイン処理　###
&ReadParse;
while (($n,$val) = each %in) {
	if ($n =~ /^img\d*$/) {next;}
	$val =~ s/&/&amp;/g;	$val =~ s/</&lt;/g;		$val =~ s/>/&gt;/g;		$val =~ s/"/&quot;/g;	$val =~ s/\r\n|\r|\n/<br>/g;
	$in{$n} = $val;
}
$mode = $in{'mode'};
$num = $in{'num'};

open (IN,"$opfile") || &error("OPEN ERROR");
($pass,$title,$com_adm,$home,$bg_img,$title_icon,$savedir,$loaddir,$adm_mail,$sendmail,$colors,$fc,$page,$logmax,$dspw,$img_max,$max_wh) = split(/<>/,<IN>);
close IN;
($bg_color,$text_color,$title_color,$sub_color,$name_color,$combg_color) = split(/,/,$colors);
@fc = split(/,/,$fc);
if ($page == 0) {$page = 5;}

if ($mode eq 'resin') {&resin;}
elsif ($mode eq 'edtin') {&edtin;}
elsif ($mode eq 'search') {&search;}
elsif ($mode eq 'past') {&past;}
elsif ($mode eq 'admin') {&admin;}
else {&main;}

print "</center></body></html>\n";
exit;

###
sub header {
	print "Content-type: text/html\n\n";
	print "<html><head><META HTTP-EQUIV=\"Content-type\" CONTENT=\"text/html; charset=Shift_JIS\">\n";
	print "<title>$title</title><link rel=\"stylesheet\" type=\"text/css\" href=\"$loaddir/style.css\"></head>\n";
	$head = 1;
}

###
sub main {
	if ($in{'newwrt'}) {&newwrt;}
	elsif ($in{'edtwrt'}) {&edtwrt;}
	elsif ($in{'delwrt'}) {&delwrt;}

	&header;
	print "<body background=\"$bg_img\" bgcolor=\"$bg_color\" text=\"$text_color\"><center>\n";
	print "<table width=98%><tr><td width=60 valign=top>";
	if ($home) {print "<a href=\"$home\">HOME</a>";}
	print "</td><td align=center>";
	if ($title_icon) {print "<img src=\"$title_icon\">";} else {print "<font color=\"$title_color\" size=\"+1\"><b>$title</b></font>";}
	print "</td><td width=60>｜<a href=\"$script?mode=search\">検索</a>｜</td></tr></table>\n";
	print "<table><tr><td>$com_adm</td></tr></table>\n";
	&in_form;

	$back = $num - $page;
	$next = $num + $page;
	$sum = 0;
	$m = -1;
	$start = 1;
	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color) = split(/<>/);
		$sum++;
		if (!$rno) {$m++;}
		if ($m < $num || $next <= $m) {next;}
		if (!$rno && !$start) {print "</td></tr></table></td></tr></table><br>\n";}
		&bbs_dsp;
		$start = 0;
	}
	close IN;
	print "</td></tr></table></td></tr></table>\n";

	print "<br><table width=$dspw><tr>\n";
	if (0 <= $back) {
		print "<form action=\"$script\" method=POST><td width=50>\n";
		print "<input type=hidden name=num value=\"$back\">\n";
		print "<input type=submit value=\"BACK\"></td></form>\n";
	}
	if ($next <= $m) {
		print "<form action=\"$script\" method=POST><td width=50>\n";
		print "<input type=hidden name=num value=\"$next\">\n";
		print "<input type=submit value=\"NEXT\"></td></form>\n";
	}
	if ($page <= $m) {
		print "<td>";
		$i = 1;
		for ($k=0; $k<=$m; $k+=$page) {
			if ($k == $num) {print "<b>$i</b>　";} else {print "<a href=\"$script?num=$k\">$i</a>　";}
			$i++;
		}
		print "</td>\n";
	}
	print "<td nowrap><a href=\"$script?mode=past\">過去ログ</a></td><td align=right nowrap>全 $sum件　<a href=\"$script?mode=admin\">[管理]</a></td></tr></table>\n";
	# 次の行は著作権表示ですので削除しないで下さい。#
	print "<a href=\"http://cgi-design.net\" target=\"_blank\">CGI-design</a>\n";
}

###
sub bbs_dsp {
	if (!$rno || $mode eq 'edtin') {
		print "<table width=$dspw bgcolor=\"$color\" cellpadding=0><tr align=center><td bgcolor=\"$combg_color\">\n";
		if ($rno) {print "<table width=92%><tr><td>";}
	} else {
		print "<hr color=\"$color\" size=1>\n";
	}
	print "<table width=100% bgcolor=\"$color\"><tr><td valign=bottom>　<font color=\"$sub_color\"><b>$sub　 <font color=\"$name_color\">$name</font></b>　 $date</font></td>\n";
	if (!$mode) {
		if (!$rno) {
			print "<form action=\"$script\" method=POST><td width=50>\n";
			print "<input type=hidden name=mode value=\"resin\">\n";
			print "<input type=hidden name=no value=\"$no\">\n";
			print "<input type=hidden name=num value=\"$num\">\n";
			print "<input type=submit value=\"返信\"></td></form>\n";
		}
		print "<td width=50 align=right nowrap><a href=\"$script?mode=edtin&no=$no&num=$num\">修正</a></td>";
	}
	print "</tr></table>\n";
	if (!$rno) {print "<table width=92%><tr><td>\n"; }

	$com =~ s/([^=^\"]|^)(https?\:[\w\.\~\-\/\?\&\+\=\:\@\%\;\#\%]+)/$1<a href="$2" target="_blank">$2<\/a>/g;
	print "<table width=100%><tr><td>\n";
	@img = split(/!:/,$img);
	if ($#img < 8) {
		&imgdsp(' hspace=4 align=left');
		print $com;
	} else {
		print "$com</td></tr><tr><td align=center valign=bottom>\n";
		&imgdsp(' hspace=2');
	}
	print "</td></tr></table>\n";
}

###
sub imgdsp {
	$k = 0;
	for ($i=0; $i<$#img; $i+=4) {
		if ($img[$i]) {
			$imgfile = "$loaddir/$no-$k.$img[$i]";
			$imgsrc = "<img src=\"$imgfile\" width=$img[$i+1] height=$img[$i+2] border=0$_[0]>";
			if ($img[$i+3]) {print "<a href=\"$imgfile\" target=\"_blank\">$imgsrc</a>";} else {print $imgsrc;}
		}
		$k++;
	}
}

###
sub in_form {
	print "<table cellspacing=1 cellpadding=0>\n";
	print "<form action=\"$script\" method=POST enctype=\"multipart/form-data\">\n";
	if ($mode eq 'edtin') {
		print "<input type=hidden name=no value=\"$in{'no'}\">\n";
		print "<input type=hidden name=num value=\"$num\">\n";
		print "<input type=hidden name=edtpw value=\"$in{'pwd'}\">\n";
		$com =~ s/<br>/\r/g;
		$pwd = '';
	} elsif ($mode eq 'resin') {
		print "<input type=hidden name=rno value=\"$in{'no'}\">\n";
		&getcook;
		$sub = $com = '';
		$submit = '返信する';
	} else {
		&getcook;
		$sub = $com = '';
		$submit = '投稿する';
	}
	print "<tr><td>名前</td><td><input type=text size=40 name=name value=\"$name\" style=\"ime-mode:active;\"></td></tr>\n";
	print "<tr><td>題名</td><td><input type=text size=60 name=sub value=\"$sub\" style=\"ime-mode:active;\"></td></tr>\n";
	print "<tr><td valign=top><br>内容</td><td><table cellspacing=0 cellpadding=0><tr align=center>\n";
	if (!$color) {$color = $fc[0];}
	foreach (@fc) {
		if ($_ eq $color) {$chk = ' checked';} else {$chk = '';}
		print "<td width=40 bgcolor=\"$_\"><input type=radio name=color value=\"$_\"$chk></td>\n";
	}
	print "</tr></table><textarea cols=68 rows=8 name=com style=\"ime-mode:active;\">$com</textarea></td></tr>\n";
	for (0 .. $img_max) {print "<tr><td>画像",$_+1,"</td><td><input type=file size=60 name=img$_></td></tr>\n";}
	print "<tr><td>修正キー</td><td><input type=password size=10 maxlength=8 name=pwd value=\"$pwd\"> （英数8文字以内）</td></tr>\n";
	print "<tr><td></td><td>";
	if ($mode eq 'edtin') {
		print "<table width=100%><tr><td><input type=submit name=edtwrt value=\"修正する\"></td>\n";
		print "<td width=40 bgcolor=red><input type=submit name=delwrt value=\"削除\"></td></form></tr></table>\n";
		if ($admpass) {
			print "<table width=100% cellspacing=8><tr align=right>\n";
			print "<form action=\"$script\" method=POST target=\"_blank\"><td>\n";
			print "<input type=hidden name=mode value=\"admin\">\n";
			print "<input type=hidden name=pass value=\"$in{'pwd'}\">\n";
			print "<input type=hidden name=host value=\"$host\">\n";
			print "$host <input type=submit value=\"ホスト拒否\">\n";
			print "<input type=submit name=word value=\"禁止語設定\"></td></form></tr></table>\n";
		}
		print "</td></tr>\n";
	} else {
		print "<input type=submit name=newwrt value=\"$submit\"></td></form></tr>\n";
	}
	print "</table><br>\n";
}

###
sub newwrt {
	&in_chk;
	($sec,$min,$hour,$mday,$mon,$year,$wday) = localtime;
	$year += 1900;
	$mon++;
	$week = ('日','月','火','水','木','金','土')[$wday];
	$nowdate = sprintf("$year年$mon月$mday日($week) %2d:%02d",$hour,$min);
	if ($in{'pwd'} ne '') {$pwd = &crypt($in{'pwd'});} else {$pwd = '';}

	&lock;
	open (IN,"$nofile") || &error("OPEN ERROR"); 		$no = <IN>; 		close IN;
	$no++;
	open (OUT,">$nofile") || &error("OPEN ERROR");		print OUT $no;		close OUT;

	$img = '';
	for (0 .. $img_max) {
		&img("$savedir/$no-$_","img$_");
		$img .= "$type!:$width!:$height!:$big!:";
	}
	$newdata = "$no<>$in{'rno'}<>$img<>$nowdate<>$in{'name'}<>$in{'sub'}<>$in{'com'}<>$in{'color'}<>$pwd<>$host<>\n";

	@new = ();
	if (!$in{'rno'}) {
		$i = $stop = 0;
		open (IN,"$bbsfile") || &error("OPEN ERROR");
		while (<IN>) {
			($no,$rno,$img,$date) = split(/<>/);
			$i++;
			if ($logmax && $logmax <= $i && !$rno) {$stop = 1;}
			if (!$stop) {push(@new,$_); next;}
			if (!$rno && $date =~ /^(\d+)年(\d+)月/) {$year = $1; $mon = $2;}
			open (OUT,">>$base/$year$mon.txt") || &error("OPEN ERROR");		print OUT $_;	close OUT;
		}
		close IN;
		unshift(@new,$newdata);
	} else {
		@tmp = ();
		$mat = 0;
		open (IN,"$bbsfile") || &error("OPEN ERROR");
		while (<IN>) {
			($no,$rno) = split(/<>/);
			if ($no eq $in{'rno'}) {$mat = 1; push(@new,$_);}
			elsif ($rno eq $in{'rno'}) {push(@new,$_);}
			else {push(@tmp,$_);}
		}
		close IN;
		if ($mat) {push(@new,$newdata);}
		push(@new,@tmp);
	}
	open (OUT,">$bbsfile") || &error("OPEN ERROR");				print OUT @new;		close OUT;
	open (OUT,">$base/log$hour.txt") || &error("OPEN ERROR");	print OUT @new;		close OUT;
	&unlock;
	&setcook;
	&msend;
	print "Location: $script\n\n";
	exit;
}

###
sub msend {
	if (!$adm_mail) {return;}
	$cont = "■日時： $nowdate\n";
	$cont .= "■名前： $in{'name'}\n";
	$cont .= "■題名： $in{'sub'}\n";
	$cont .= "■内容： \n$in{'com'}";
	$cont =~ s/&amp;/&/g;
	$cont =~ s/&lt;/</g;
	$cont =~ s/&gt;/>/g;
	$cont =~ s/&quot;/"/g;
	$cont =~ s/\r\n|\r|<br>/\n/g;
	&jcode'convert(*cont,'jis');

	$in{'name'} =~ s/ //g;
	$from = &mimeencode("$in{'name'} <$adm_mail>");
	$msub = &mimeencode($title);

	open (MAIL,"| $sendmail -t") || &error("メールを送信できません");
	print MAIL "Return-path: <$adm_mail>\n";
	print MAIL "To: $adm_mail\n";
	print MAIL "From: $from\n";
	print MAIL "Subject: $msub\n";
	print MAIL "MIME-Version: 1.0\n";
	print MAIL "Content-type: text/plain; charset=ISO-2022-JP\n";
	print MAIL "Content-Transfer-Encoding: 7bit\n\n";
	print MAIL "$cont\n";
	close MAIL;
}

###
sub in_chk {
	$addr = $ENV{'REMOTE_ADDR'};
	$host = gethostbyaddr(pack("C4", split(/\./, $addr)), 2) || $addr;
	open (IN,"$hostfile") || &error("OPEN ERROR");		@deny = split(/<br>/,<IN>);		close IN;
	$flag = 0;
	foreach (@deny) {
		s/\*/\.\*/g;
		if ($_ && $host =~ /$_/i) {$flag = 1; last;}
	}
	if ($flag) {&error("投稿できません");}

	if (!$in{'name'}) {&error("名前を入力して下さい");}
	if (!$in{'com'}) {&error("内容を入力して下さい");}
	$wcom = "$in{'name'}$in{'sub'}$in{'com'}";
	open (IN,"$wordfile") || &error("OPEN ERROR");		@deny = split(/<br>/,<IN>);		close IN;
	$flag = 0;
	foreach (@deny) {if ($_ && 0 <= index($wcom,$_)) {$flag = 1; last;}}
	if ($flag) {&error("投稿できません");}
	if ($wcom !~ /(\x82[\x9F-\xF2])|(\x83[\x40-\x96])/) {&error;}
	if ($wcom =~ /(http.*){5,}/) {&error;}
}

###
sub resin {
	&header;
	print "<body background=\"$bg_img\" bgcolor=\"$bg_color\" text=\"$text_color\"><center>\n";
	print "<table width=97%><tr><td><a href=\"$script?num=$num\">戻る</a></td></tr></table>\n";
	print "<b>*****　返　信　*****</b><br><br>\n";
	$mat = 0;
	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color) = split(/<>/);
		if ($no eq $in{'no'} || $rno eq $in{'no'}) {$mat = 1; &bbs_dsp;}
		elsif ($mat) {last;}
	}
	close IN;
	print "</td></tr></table></td></tr></table><br>\n";
	&in_form;
}

###
sub edtin {
	&header;
	print "<body background=\"$bg_img\" bgcolor=\"$bg_color\" text=\"$text_color\"><center>\n";
	print "<table width=97%><tr><td><a href=\"$script?num=$num\">戻る</a></td></tr></table>\n";

	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color,$pwd,$host) = split(/<>/);
		if ($no eq $in{'no'}) {last;}
	}
	close IN;

	$addr = $ENV{'REMOTE_ADDR'};
	$inhost = gethostbyaddr(pack("C4", split(/\./, $addr)), 2) || $addr;
	if ($inhost ne $host) {
		if ($in{'pwd'} eq '') {
			print "<br><br><br><br><h4>修正キーを入力して下さい</h4>\n";
			print "<form action=\"$script\" method=POST>\n";
			print "<input type=hidden name=mode value=\"edtin\">\n";
			print "<input type=hidden name=no value=\"$in{'no'}\">\n";
			print "<input type=hidden name=num value=\"$num\">\n";
			print "<input type=password size=10 maxlength=8 name=pwd>\n";
			print "<input type=submit value=\"入力\"></form>\n";
			print "</center></body></html>\n";
			exit;
		}
		$mat = &decrypt($in{'pwd'},$pass);
		if ($mat) {$admpass = 1;}
		else {
			$admpass = 0;
			if ($pwd eq '') {&error("該当の記事に修正キーが設定されていません");}
			$mat = &decrypt($in{'pwd'},$pwd);
			if (!$mat) {&error("修正キーが違います");}
		}
	}
	print "<b>*****　修正・削除　*****</b><br><br>\n";
	$wcom = $com;
	&bbs_dsp;
	print "</td></tr></table></td></tr></table><br>\n";
	$com = $wcom;
	&in_form;
}

###
sub in_pwchk {
	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color,$pwd,$host) = split(/<>/);
		if ($no eq $in{'no'}) {last;}
	}
	close IN;
	$addr = $ENV{'REMOTE_ADDR'};
	$inhost = gethostbyaddr(pack("C4", split(/\./, $addr)), 2) || $addr;
	if ($inhost eq $host) {return;}

	if ($in{'edtpw'} eq '') {&error;}
	$mat = &decrypt($in{'edtpw'},$pass);
	if ($mat) {return;}

	if ($pwd eq '') {&error;}
	$mat = &decrypt($in{'edtpw'},$pwd);
	if (!$mat) {&error;}
}

###
sub edtwrt {
	&in_pwchk;
	&in_chk;
	&lock;
	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color,$pwd,$host) = split(/<>/);
		if ($no eq $in{'no'}) {
			if ($in{'pwd'} ne '') {$pwd = &crypt($in{'pwd'});}
			@img = split(/!:/,$img);
			$img = '';
			for $n (0 .. 3) {
				&img("$savedir/$no-$n","img$n");
				if ($type) {
					if ($type ne $img[4*$n]) {unlink "$savedir/$no-$n.$img[4*$n]";}
					$img .= "$type!:$width!:$height!:$big!:";
				} else {
					$img .= "$img[4*$n]!:$img[4*$n+1]!:$img[4*$n+2]!:$img[4*$n+3]!:";
				}
			}
			push(@new,"$no<>$rno<>$img<>$date<>$in{'name'}<>$in{'sub'}<>$in{'com'}<>$in{'color'}<>$pwd<>$host<>\n");
		} else {push(@new,$_);}
	}
	close IN;
	open (OUT,">$bbsfile") || &error("OPEN ERROR");		print OUT @new;		close OUT;
	&unlock;
	print "Location: $script?num=$num\n\n";
	exit;
}

###
sub delwrt {
	&in_pwchk;
	&lock;
	open (IN,"$bbsfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img) = split(/<>/);
		if ($no eq $in{'no'} || $rno eq $in{'no'}) {
			@img = split(/!:/,$img);
			for (0 .. 3) {
				if ($img[4*$_]) {unlink "$savedir/$no-$_.$img[4*$_]";}
			}
		} else {push(@new,$_);}
	}
	close IN;
	open (OUT,">$bbsfile") || &error("OPEN ERROR");		print OUT @new;		close OUT;
	&unlock;
	print "Location: $script?num=$num\n\n";
	exit;
}

###
sub search {
	&header;
	print "<body background=\"$bg_img\" bgcolor=\"$bg_color\" text=\"$text_color\"><center>\n";
	print "<table width=97%><tr><td><a href=\"$script\">戻る</a></td></tr></table>\n";
	print "キーワードを入力し「検索」を押して下さい。キーワードを複数指定する場合はスペースで区切って下さい。\n";
	print "<form action=\"$script\" method=POST>\n";
	print "<input type=hidden name=mode value=\"search\">\n";
	print "キーワード <input type=text name=word size=50 value=\"$in{'word'}\">\n";
	print "<input type=submit value=\"検索\"></form>\n";
	if (!$in{'word'}) {return;}

	$in{'word'} =~ s/　/ /g;
	@word = split(/\s+/,$in{'word'});
	$back = $num - $page;
	$next = $num + $page;
	$m = -1;
	&seadata($bbsfile);
	if ($m < $next) {
		$nowyear = (localtime)[5] + 1900;
		LOOP: for ($year=$nowyear; 2010<=$year; $year--) {
			for $mon (1 .. 12) {
				$pastfile = "$base/$year$mon.txt";
				if (!-e $pastfile) {next;}
				&seadata($pastfile);
				if ($next <= $m) {last LOOP;}
			}
		}
	}
	if ($m < 0) {print "<br>該当する記事はありません。\n"; return;}

	print "<table><tr>\n";
	if (0 <= $back) {
		print "<form action=\"$script\" method=POST><td width=60>\n";
		print "<input type=hidden name=mode value=\"search\">\n";
		print "<input type=hidden name=word value=\"$in{'word'}\">\n";
		print "<input type=hidden name=num value=\"$back\">\n";
		print "<input type=submit value=\"BACK\"></td></form>\n";
	}
	if ($next <= $m) {
		print "<form action=\"$script\" method=POST><td>\n";
		print "<input type=hidden name=mode value=\"search\">\n";
		print "<input type=hidden name=word value=\"$in{'word'}\">\n";
		print "<input type=hidden name=num value=\"$next\">\n";
		print "<input type=submit value=\"NEXT\"></td></form>\n";
	}
	print "</tr></table>\n";
}

###
sub seadata {
	@data = ();
	open (IN,"$_[0]") || &error("OPEN ERROR");
	while (<IN>) {
		$indata = $_;
		($no,$rno) = split(/<>/);
		if (!$rno) {&seafind; @data = ();}
		if ($next <= $m) {last;}
		push(@data,$indata);
	}
	close IN;
	if ($m < $next) {&seafind;}
}

###
sub seafind {
	$data = join("<>",@data);
	$find = 0;
	foreach $word (@word) {if (0 <= index($data,$word)) {$find = 1;} else {$find = 0; last;}}
	if (!$find) {return;}
	$m++;
	if ($m < $num || $next <= $m) {return;}

	foreach (@data) {
		($no,$rno,$img,$date,$name,$sub,$com,$color) = split(/<>/);
		&bbs_dsp;
	}
	print "</td></tr></table></td></tr></table><br>\n";
}

###
sub past {
	$logyear = $in{'year'};
	$logmon = $in{'mon'};
	($sec,$min,$hour,$mday,$nowmon,$nowyear) = localtime;
	$nowyear += 1900;
	$nowmon++;
	if (!$logyear) {$logyear = $nowyear; $logmon = $nowmon;}
	$pastfile = "$base/$logyear$logmon.txt";

	&header;
	print "<body background=\"$bg_img\" bgcolor=\"$bg_color\" text=\"$text_color\"><center>\n";
	print "<table width=97%><tr><td><a href=\"$script\">戻る</a></td></tr></table>\n";
	$mon = $logmon - 1;
	if ($mon < 1) {$mon = 12; $year = $logyear - 1;} else {$year = $logyear;}
	print "<a href=\"$script?mode=past&year=$year&mon=$mon\">&lt;&lt; BACK</a>　　<font size=\"+1\"><b>$logyear年$logmon月</b></font>　　";
	$mon = $logmon + 1;
	if (12 < $mon) {$mon = 1; $year = $logyear + 1;} else {$year = $logyear;}
	print "<a href=\"$script?mode=past&year=$year&mon=$mon\">NEXT &gt;&gt;</a><div style=\"margin-top:5px;\"></div>\n";
	if (!-e $pastfile) {return;}

	$start = 1;
	open (IN,"$pastfile") || &error("OPEN ERROR");
	while (<IN>) {
		($no,$rno,$img,$date,$name,$sub,$com,$color) = split(/<>/);
		if (!$rno && !$start) {print "</td></tr></table></td></tr></table><br>\n";}
		&bbs_dsp;
		$start = 0;
	}
	close IN;
	print "</td></tr></table></td></tr></table>\n";
}

###
sub admin {
	&header;
	print "<body><center>\n";
	$inpass = $in{'pass'};
	if ($inpass eq '') {
		print "<table width=97%><tr><td><a href=\"$script\">戻る</a></td></tr></table>\n";
		print "<br><br><br><br><h4>パスワードを入力して下さい</h4>\n";
		print "<form action=\"$script\" method=POST>\n";
		print "<input type=hidden name=mode value=\"admin\">\n";
		print "<input type=password size=10 maxlength=8 name=pass>\n";
		print " <input type=submit value=\" 認証 \"></form>\n";
		print "</center></body></html>\n";
		exit;
	}
	$mat = &decrypt($inpass,$pass);
	if (!$mat) {&error("パスワードが違います");}

	print "<table width=95% bgcolor=\"#8c4600\"><tr><td>　<a href=\"$script\"><font color=\"#ffffff\"><b>Return</b></font></a></td>\n";
	print "<form action=\"$script\" method=POST><td align=right>\n";
	print "<input type=hidden name=mode value=\"admin\">\n";
	print "<input type=hidden name=pass value=\"$inpass\">\n";
	print "<input type=submit value=\"拒否ホスト\">\n";
	print "<input type=submit name=word value=\" 禁止語 \">\n";
	print "<input type=submit name=set value=\"基本設定\"></td></form><td width=10></td></tr></table><br>\n";

	if ($in{'word'}) {&dword;}
	elsif ($in{'set'}) {&setup;}
	else {&dhost;}
}

###
sub dhost {
	if ($in{'host'}) {
		open (IN,"$hostfile") || &error("OPEN ERROR");		$com = <IN>;						close IN;
		open (OUT,">$hostfile") || &error("OPEN ERROR");	print OUT "$in{'host'}<br>$com";	close OUT;
	} elsif ($in{'wrt'}) {
		open (OUT,">$hostfile") || &error("OPEN ERROR");	print OUT $in{'com'};				close OUT;
	}
	print "投稿を拒否するホスト名を入力して改行して下さい。<br>任意の文字を「*」で指定できます。　（例） a123*.ne.jp<br><br>\n";
	print "<form action=\"$script\" method=POST>\n";
	print "<input type=hidden name=mode value=\"admin\">\n";
	print "<input type=hidden name=pass value=\"$inpass\">\n";
	print "<input type=submit name=wrt value=\"設定する\"><br><br>\n";

	open (IN,"$hostfile") || &error("OPEN ERROR");		$com = <IN>;		close IN;
	$com =~ s/<br>/\r/g;
	print "<table bgcolor=\"#e6e4ce\" cellspacing=10><tr><td><textarea cols=60 rows=20 name=com>$com</textarea></td></tr></table>\n";
	print "</form>\n";
}

###
sub dword {
	if ($in{'wrt'}) {
		open (OUT,">$wordfile") || &error("OPEN ERROR");	print OUT $in{'com'};		close OUT;
	}
	print "禁止語を１語ずつ改行して入力して下さい。<br><br>\n";
	print "<form action=\"$script\" method=POST>\n";
	print "<input type=hidden name=mode value=\"admin\">\n";
	print "<input type=hidden name=pass value=\"$inpass\">\n";
	print "<input type=hidden name=word value=\"1\">\n";
	print "<input type=submit name=wrt value=\"設定する\"><br><br>\n";

	open (IN,"$wordfile") || &error("OPEN ERROR");		$com = <IN>;		close IN;
	$com =~ s/<br>/\r/g;
	print "<table bgcolor=\"#e6e4ce\" cellspacing=10><tr><td><textarea cols=60 rows=20 name=com>$com</textarea></td></tr></table>\n";
	print "</form>\n";
}

###
sub setup {
	if ($in{'wrt'}) {
		if ($in{'newpass'} ne '') {$pass = &crypt($in{'newpass'});}
		$title = $in{'title'};
		$com_adm = $in{'com_adm'};
		$home = $in{'home'};			$bg_img = $in{'bg_img'};		$title_icon = $in{'title_icon'};
		$savedir = $in{'savedir'};		$loaddir = $in{'loaddir'};
		$adm_mail = $in{'adm_mail'};	$sendmail = $in{'sendmail'};
		$colors = $in{'colors'};		$colors =~ s/\0/,/g;
		$in{'fc'} =~ s/\0/,/g;			@fc = split(/,/,$in{'fc'});
		$page = $in{'page'};			$logmax = $in{'logmax'};		$dspw = $in{'dspw'};
		$img_max = $in{'img_max'};		$max_wh = $in{'max_wh'};

		open (OUT,">$opfile") || &error("OPEN ERROR");
		print OUT "$pass<>$title<>$com_adm<>$home<>$bg_img<>$title_icon<>$savedir<>$loaddir<>$adm_mail<>$sendmail<>$colors<>$in{'fc'}<>$page<>$logmax<>$dspw<>$img_max<>$max_wh";
		close OUT;
	}
	print "下記に入力後、「設定する」を押して下さい。<br><br>\n";
	print "<form action=\"$script\" method=POST>\n";
	print "<input type=hidden name=mode value=\"admin\">\n";
	print "<input type=hidden name=pass value=\"$inpass\">\n";
	print "<input type=hidden name=set value=\"1\">\n";
	print "<input type=submit name=wrt value=\"設定する\"><br><br>\n";

	print "<table bgcolor=\"#dddddd\" cellspacing=10><tr><td><table cellspacing=1 cellpadding=0>\n";
	print "<tr><td><b>タイトル</b></td><td><input type=text size=60 name=title value=\"$title\"></td></tr>\n";
	$com_adm =~ s/<br>/\r/g;
	print "<tr><td valign=top><br><b>コメント</b></td><td><textarea cols=70 rows=6 name=com_adm>$com_adm</textarea></td></tr>\n";
	print "<tr><td><b>ホームURL</b></td><td><input type=text size=60 name=home value=\"$home\"></td></tr>\n";
	print "<tr><td><b>壁紙</b></td><td><input type=text size=60 name=bg_img value=\"$bg_img\"></td></tr>\n";
	print "<tr><td><b>タイトルアイコン</b></td><td><input type=text size=60 name=title_icon value=\"$title_icon\"></td></tr>\n";
	print "<tr><td><b>画像格納ディレクトリ</b></td><td><input type=text size=60 name=savedir value=\"$savedir\"></td></tr>\n";
	print "<tr><td><b>画像読出ディレクトリ</b></td><td><input type=text size=60 name=loaddir value=\"$loaddir\"></td></tr>\n";
	print "<tr><td><b>受信メールアドレス</b></td><td><input type=text size=40 name=adm_mail value=\"$adm_mail\"></td></tr>\n";
	print "<tr><td><b>sendmail パス</b></td><td><input type=text size=40 name=sendmail value=\"$sendmail\"></td></tr>\n";

	print "<tr><td></td><td><a href=\"$loaddir/color.htm\" target=\"_blank\">カラーコード</a></td></tr>\n";
	@name = ('基本背景色','基本文字色','タイトル色','見出し文字色','名前色','内容背景色');
	@colors = split(/,/,$colors);
	for (0 .. $#name) {
		print "<tr><td><b>$name[$_]</b></td><td><table cellspacing=0 cellpadding=0><tr>\n";
		print "<td><input type=text size=10 name=colors value=\"$colors[$_]\" style=\"ime-mode:inactive;\"></td>\n";
		print "<td width=5></td><td width=80 bgcolor=\"$colors[$_]\"></td></tr></table></td></tr>\n";
	}
	print "<tr><td valign=top><b>枠色</b></td><td><table cellspacing=1 cellpadding=0>\n";
	for (0 .. 7) {print "<tr><td><input type=text size=10 name=fc value=\"$fc[$_]\" style=\"ime-mode:inactive;\"></td><td width=5></td><td width=35 bgcolor=\"$fc[$_]\"></td></tr>\n";}
	print "</table></td></tr>\n";
	print "<tr><td><b>記事表\示</b></td><td><input type=text size=4 name=page value=\"$page\" style=\"text-align:right; ime-mode:disabled;\">件/ページ（親記事）　現行ログ<input type=text size=4 name=logmax value=\"$logmax\" style=\"text-align:right; ime-mode:disabled;\">件（親/返信記事の合計）　表\示幅<input type=text size=4 name=dspw value=\"$dspw\" style=\"text-align:right; ime-mode:disabled;\">px</td></tr>\n";
	print "<tr><td><b>画像表\示</b></td><td><select name=img_max>\n";
	for (0 .. 3) {
		if ($_ == $img_max) {$sel = ' selected';} else {$sel = '';}
		print "<option value=\"$_\"$sel>",$_+1,"枚</option>\n";
	}
	print "</select>　　<input type=text size=4 name=max_wh value=\"$max_wh\" style=\"text-align:right; ime-mode:disabled;\">px</td></tr>\n";
	print "<tr><td><b>パスワード変更</b></td><td><input type=password size=10 maxlength=8 name=newpass> （英数8文字以内）</td></tr>\n";
	print "</table></td></tr></table></form>\n";
}

###
sub img {
	$type=$width=$height=$big=$mac='';
	$imgdata = $in{"$_[1]"};
	if (!$imgdata) {return;}

	foreach (@in) {
		if (/$_[1]/ and /Content-Type:(.+)/i) {
			if ($1 =~ /image\/.*jpeg/i) {$type = 'jpg';}
			elsif ($1 =~ /image\/gif/i) {$type = 'gif';}
			elsif ($1 =~ /image\/.*png/i) {$type = 'png';}
		}
		if (/application\/x-macbinary/i) {$mac = 1;}
	}
	if (!$type) {&error("このファイルはアップロードできません");}

	if ($mac) {
		$leng = substr($imgdata,83,4);
		$leng = unpack("%N",$leng);
		$imgdata = substr($imgdata,128,$leng);
	}
	$img_file = "$_[0].$type";
	open (IMG,">$img_file") || &error("$img_fileファイルを作成できません");
	binmode IMG;
	print IMG $imgdata;
	close IMG;
	chmod (0666,$img_file);

	($t,$width,$height) = &getImageSize("$img_file");
	if (!$width || !$height) {&error("ファイルを認識できません");}

	if ($max_wh && ($max_wh < $width || $max_wh < $height)) {
		if ($height < $width) {$height = int($height * $max_wh / $width); $width = $max_wh;}
		else {$width = int($width * $max_wh / $height); $height = $max_wh;}
		$big = 1;
	}
}

#=========================================
# Get Image Pixel Size.（出典：stdio-902）
#=========================================
sub getImageSize {
	local($file_name) = @_;
	local($head);

	return if (!open IMG, $file_name);
	binmode IMG;
	read IMG, $head, 8;
	if ($head eq "\x89\x50\x4e\x47\x0d\x0a\x1a\x0a") {
		local($width, $height);
		if (read(IMG, $head, 4) != 4 || read(IMG, $head, 4) != 4 || $head ne 'IHDR') {
			close IMG;
			return "PNG", 0;
		}
		read IMG, $head, 8;
		close IMG;
		$width = unpack "N", substr($head, 0, 4);
		$height = unpack "N", substr($head, 4, 4);
		return "PNG", $width, $height;
	}
	$head = substr $head, 0, 3;
	if ($head eq "\x47\x49\x46") {
		local($head, $width, $height);
		seek IMG, 6, 0;
		read IMG, $head, 4;
		close IMG;
		($width, $height) = unpack "vv", $head;
		return "GIF", $width, $height;
	}
	$head = substr $head, 0, 2;
	if ($head eq "\xff\xd8") {
		local($head, $width, $height, $w1, $w2, $h1, $h2, $l1, $l2, $length);
		seek IMG, 2, 0;
		while (read IMG, $head, 1) {
			last if ($head eq "");
			if ($head eq "\xff") {
				$head = getc IMG;
				if ($head =~ /^[\xc0-\xc3\xc5-\xcf]$/) {
					seek IMG, 3, 1;
					last if (read(IMG, $head, 4) != 4);
					close IMG;
					($h1, $h2, $w1, $w2) = unpack "C4", $head;
					$height = $h1 * 256 + $h2;
					$width  = $w1 * 256 + $w2;
					return "JPG", $width, $height;
				} elsif ($head eq "\xd9" || $head eq "\xda") {
					last;
				} else {
					last if (read(IMG, $head, 2) != 2);
					($l1, $l2) = unpack "CC", $head;
					$length = $l1 * 256 + $l2;
					seek IMG, $length - 2, 1;
				}
			}
		}
		close IMG;
		return "JPG", 0;
	}
	return 0;
}

###
sub setcook {
	my($sec,$min,$hour,$mday,$mon,$year,$wday) = gmtime(time+60*24*60*60);
	$ww = (Sun,Mon,Tue,Wed,Thu,Fri,Sat)[$wday];
	$month = (Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec)[$mon];
	$gmt = sprintf("%s, %02d-%s-%04d %02d:%02d:%02d GMT",$ww,$mday,$month,$year+1900,$hour,$min,$sec);
	$cook = "$in{'name'}<>$in{'color'}<>$in{'pwd'}<>";
	print "Set-Cookie: bbs39=$cook; expires=$gmt;\n";
}

###
sub getcook {
	my($n,$val);
	foreach (split(/;\s*/,$ENV{'HTTP_COOKIE'})) {
		($n,$val) = split(/=/);
		if ($n eq 'bbs39') {last;}
		$val = '';
	}
	($name,$color,$pwd) = split(/<>/,$val);
}

###
sub lock {
	$retry = 3;
	if (-e $lockfile) {
		$locktime = (stat($lockfile))[9];
		if ($locktime < time - 60) {&unlock;}
	}
	while (!mkdir($lockfile, 0755)) {
		if (--$retry < 0) {&error("busy!");}
		sleep(1);
	}
}
###
sub unlock {rmdir($lockfile);}

###
sub crypt {
	@salt = ('a' .. 'z','A' .. 'Z','0' .. '9');
	srand;
	$salt = "$salt[int(rand($#salt))]$salt[int(rand($#salt))]";
	return crypt($_[0],$salt);
}

###
sub decrypt {
	$salt = $_[1] =~ /^\$1\$(.*)\$/ && $1 || substr($_[1],0,2);
	if (crypt($_[0],$salt) eq $_[1] || crypt($_[0],'$1$' . $salt) eq $_[1]) {return 1;}
	return 0;
}

###
sub error {
	if (!$head) {&header; print "<body><center>\n";}
	print "<br><br><br><br><h3>ERROR !!</h3><font color=red><b>$_[0]</b></font>\n";
	print "</center></body></html>\n";
	exit;
}
