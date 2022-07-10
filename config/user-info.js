/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2021-01-23 15:38:31
 * @LastEditors: Rainy
 * @LastEditTime: 2021-06-19 22:25:49
 */

const userInfo = {
	loginUin: '905097199',
	cookie: 'pgv_pvid=5228208726; pac_uid=0_aedcc6662d5cc; RK=YJ/FOEXgdy; ptcz=51b1936deee564e3a247d2abcced9ae30887838701b49ac7970b7af8dfab758f; Qs_lvt_323937=1649086942; Qs_pv_323937=1937365716604432400; iip=0; fqm_pvqid=e2959f19-57f0-4a91-a416-9494cb70c26f; ts_uid=3452460355; tvfe_boss_uuid=1d94b1329692e10e; ptui_loginuin=905097199; pt_sms_phone=132******67; _tc_unionid=1abe9ad9-e3f5-415c-9bba-f59472dedb7b; fqm_sessionid=2724723d-a463-4c67-8d63-eda05f59ac7c; ts_refer=www.baidu.com/s; pgv_info=ssid=s7626592077; _qpsvr_localtk=0.6647973242882019; login_type=1; wxopenid=; uin=905097199; wxunionid=; psrf_access_token_expiresAt=1665244576; qm_keyst=Q_H_L_5LY3c5V6qNM9ob47AfMyV72Z_ut97k9JRVByxHb6QIjdERRAFXGtoVQ; tmeLoginType=2; qm_keyst=Q_H_L_5LY3c5V6qNM9ob47AfMyV72Z_ut97k9JRVByxHb6QIjdERRAFXGtoVQ; euin=NKnkoeEloKEq; qqmusic_key=Q_H_L_5LY3c5V6qNM9ob47AfMyV72Z_ut97k9JRVByxHb6QIjdERRAFXGtoVQ; psrf_musickey_createtime=1657468576; wxrefresh_token=; psrf_qqrefresh_token=6790E0D4EEBF5518C967A964369149B3; psrf_qqopenid=39BBE716D6260B1E7A76FC9708DEAA86; psrf_qqunionid=6D8DF358E51023A4FC94ECE64EDBDDBB; psrf_qqaccess_token=7361C1F4C363B2E637FBF70E8BC031AE; ts_last=y.qq.com/',
}

const cookieList = userInfo.cookie.split('; ').map(_ => _.trim());

const cookieObject = {};
cookieList.filter(Boolean).forEach(_ => {
	if (_) {
		const [key, value = ''] = _.split('=');

		cookieObject[key] = value;
	}
});

module.exports = Object.assign(userInfo, {
	uin: userInfo.loginUin || cookieObject.uin,
	cookieList,
	cookieObject,
});
