import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const KYC = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.kyc, styles.kycLayout]}>
      <View style={[styles.desktop1, styles.desktop1Border]} />
      <Image
        style={styles.asset64x1}
        resizeMode="cover"
        source={require("../assets/asset64x1.png")}
      />
      <Text style={styles.viewLedger}>View Ledger</Text>
      <View style={[styles.sidebarParent, styles.sidebarLayout]}>
        <View style={[styles.sidebar, styles.sidebarLayout]}>
          <View style={[styles.sidebarChild, styles.sidebarLayout]} />
          <Text style={styles.title}>Navbar</Text>
          <View style={styles.ulLi}>
            <Pressable
              style={[styles.li1, styles.li1Position]}
              onPress={() => navigation.navigate("BrandDashboard")}
            >
              <View style={styles.li1Child} />
              <View style={[styles.li11, styles.li1Position]}>
                <Image
                  style={[styles.li1Item, styles.li1ItemPosition]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-3.png")}
                />
                <Text style={styles.overview}>Overview</Text>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
              </View>
            </Pressable>
            <View style={[styles.li12, styles.li12Layout]}>
              <Text style={styles.payouts}>Payouts</Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector12.png")}
              />
            </View>
            <View style={styles.li13}>
              <Text style={styles.payouts}>Ledger</Text>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector8.png")}
              />
            </View>
            <View style={[styles.li14, styles.li12Layout]}>
              <Text style={styles.payouts}>Statements</Text>
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
            <View style={[styles.li15, styles.li12Layout]}>
              <Text style={styles.payouts}>Compliance</Text>
              <Image
                style={[styles.vectorIcon4, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector10.png")}
              />
            </View>
            <View style={[styles.li16, styles.li12Layout]}>
              <Text style={styles.payouts}>Settings</Text>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
          </View>
          <View style={[styles.contactUs, styles.contactLayout]}>
            <View style={[styles.contactUsChild, styles.contactLayout]} />
            <Text style={styles.haveAnyProblems}>
              Have any problems with manage your dashbord?
            </Text>
            <View style={styles.contactUsItem} />
            <Text style={styles.contactUs1}>Contact Us</Text>
          </View>
        </View>
        <Image
          style={styles.asset74x1}
          resizeMode="cover"
          source={require("../assets/asset-74x-11.png")}
        />
      </View>
      <View style={styles.saahasZeroWaste1Parent}>
        <Image
          style={styles.saahasZeroWaste1Icon}
          resizeMode="cover"
          source={require("../assets/saahaszerowaste-1.png")}
        />
        <Text style={styles.saahasZeroWaste}>Saahas Zero Waste</Text>
        <Text style={styles.bengaluruKarnataka}>Bengaluru, Karnataka</Text>
        <View style={styles.emailCityStateCountryP}>
          <Text style={[styles.collector, styles.textTypo]}>Collector</Text>
          <Text style={[styles.mtday, styles.textTypo]}>10MT/day</Text>
          <Text style={[styles.pvtLtd, styles.pvtLtdTypo]}>Pvt. Ltd.</Text>
          <Text style={[styles.viewOnMap, styles.pvtLtdTypo]}>View on Map</Text>
          <Text style={[styles.text, styles.textTypo]}>(+234)802-446-8361</Text>
          <Text style={[styles.role, styles.roleTypo]}>Role</Text>
          <Text style={[styles.processingCapacity, styles.roleTypo]}>
            Processing Capacity
          </Text>
          <Text style={[styles.type, styles.roleTypo]}>Type</Text>
          <Text style={[styles.siteLocation, styles.gstinTypo]}>
            Site Location
          </Text>
          <Text style={[styles.gstin, styles.gstinTypo]}>{`GSTIN `}</Text>
        </View>
        <Text style={[styles.ratings, styles.text1Layout]}>RATINGS</Text>
        <Text style={[styles.text1, styles.text1Layout]}>90%</Text>
        <Text style={[styles.approval, styles.text1Layout]}>Approval %</Text>
        <Image
          style={styles.starsIcon}
          resizeMode="cover"
          source={require("../assets/stars.png")}
        />
        <View style={[styles.vectorParent, styles.vectorLayout]}>
          <Image
            style={[styles.groupChild, styles.li1ItemPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Text style={[styles.downloadFiles, styles.viewActivityTypo]}>
            Download Files
          </Text>
          <Image
            style={[styles.outlineArrowCircleDown, styles.li12Layout]}
            resizeMode="cover"
            source={require("../assets/outline--arrowcircledown.png")}
          />
        </View>
        <View style={[styles.vectorGroup, styles.vectorLayout]}>
          <Image
            style={[styles.groupChild, styles.li1ItemPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-22.png")}
          />
          <Text style={[styles.viewActivity, styles.viewActivityTypo]}>
            View Activity
          </Text>
        </View>
      </View>
      <View style={[styles.kycChild, styles.desktop1Border]} />
    </View>
  );
};

const styles = StyleSheet.create({
  kycLayout: {
    height: 769,
    backgroundColor: Color.white,
  },
  desktop1Border: {
    borderWidth: 4,
    borderStyle: "solid",
    position: "absolute",
  },
  sidebarLayout: {
    height: 749,
    position: "absolute",
  },
  li1Position: {
    height: 56,
    left: 0,
    top: 0,
    position: "absolute",
  },
  li1ItemPosition: {
    borderRadius: Border.br_3xs,
    left: -5,
    top: -5,
    position: "absolute",
  },
  li12Layout: {
    height: 24,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  contactLayout: {
    height: 146,
    width: 248,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 160,
    color: Color.black,
    fontSize: FontSize.size_xl,
    height: 40,
    textAlign: "left",
    position: "absolute",
  },
  pvtLtdTypo: {
    left: 161,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
    height: 40,
    textAlign: "left",
    position: "absolute",
  },
  roleTypo: {
    height: 38,
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  gstinTypo: {
    left: 1,
    height: 38,
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  text1Layout: {
    height: 33,
    textAlign: "center",
    position: "absolute",
  },
  vectorLayout: {
    height: 35,
    width: 162,
    left: 56,
    position: "absolute",
  },
  viewActivityTypo: {
    top: 9,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  desktop1: {
    borderColor: "#000",
    width: 1366,
    left: 0,
    top: 0,
    height: 769,
    backgroundColor: Color.white,
  },
  asset64x1: {
    top: 34,
    left: 33,
    width: 222,
    height: 63,
    position: "absolute",
  },
  viewLedger: {
    top: 502,
    left: 269,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 28,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  sidebarChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.mediumseagreen_100,
    width: 298,
    left: 0,
    top: 0,
  },
  title: {
    top: 139,
    fontSize: FontSize.size_lg,
    color: Color.gray_500,
    textAlign: "left",
    left: 65,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  li1Child: {
    top: 8,
    left: 291,
    borderRadius: Border.br_51xl,
    backgroundColor: Color.aqua,
    width: 2,
    height: 34,
    position: "absolute",
  },
  li1Item: {
    width: 260,
    height: 66,
  },
  overview: {
    top: 13,
    left: 68,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon: {
    height: "35.71%",
    width: "10%",
    top: "26.79%",
    right: "78.8%",
    bottom: "37.5%",
    left: "11.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  li11: {
    width: 250,
  },
  li1: {
    width: 293,
  },
  payouts: {
    left: 40,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    width: "24.27%",
    right: "75.73%",
  },
  li12: {
    top: 71,
    width: 103,
    left: 28,
    height: 24,
  },
  vectorIcon2: {
    width: "26.32%",
    right: "73.68%",
  },
  li13: {
    width: 95,
    top: 129,
    height: 24,
    left: 28,
    position: "absolute",
  },
  vectorIcon3: {
    width: "18.46%",
    right: "81.54%",
  },
  li14: {
    top: 187,
    width: 130,
    left: 28,
    height: 24,
  },
  vectorIcon4: {
    width: "18.94%",
    right: "81.06%",
  },
  li15: {
    top: 245,
    width: 132,
    left: 28,
    height: 24,
  },
  vectorIcon5: {
    width: "22.86%",
    right: "77.14%",
  },
  li16: {
    top: 301,
    width: 105,
    left: 28,
    height: 24,
  },
  ulLi: {
    top: 181,
    height: 325,
    width: 293,
    left: 24,
    position: "absolute",
  },
  contactUsChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_600,
    left: 0,
    top: 0,
  },
  haveAnyProblems: {
    top: 30,
    left: 17,
    color: Color.gray_700,
    width: 207,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  contactUsItem: {
    top: 93,
    left: 27,
    backgroundColor: Color.royalblue,
    shadowColor: "rgba(0, 240, 255, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 187,
    height: 40,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  contactUs1: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_xl,
    top: 101,
    left: 65,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  contactUs: {
    top: 559,
    left: 24,
  },
  sidebar: {
    width: 317,
    height: 749,
    left: 0,
    top: 0,
  },
  asset74x1: {
    top: 35,
    left: 38,
    width: 240,
    height: 88,
    position: "absolute",
  },
  sidebarParent: {
    top: 10,
    width: 317,
    height: 749,
    left: 12,
  },
  saahasZeroWaste1Icon: {
    top: 46,
    left: 47,
    width: 194,
    height: 194,
    position: "absolute",
  },
  saahasZeroWaste: {
    top: 92,
    width: 438,
    height: 50,
    color: Color.black,
    left: 340,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  bengaluruKarnataka: {
    width: 228,
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
    left: 340,
    fontSize: FontSize.size_xl,
    height: 40,
    top: 129,
    textAlign: "left",
    position: "absolute",
  },
  collector: {
    width: 459,
    top: 0,
    fontWeight: "500",
    left: 160,
  },
  mtday: {
    top: 51,
    width: 152,
  },
  pvtLtd: {
    width: 84,
    top: 101,
    left: 161,
  },
  viewOnMap: {
    top: 161,
    width: 151,
  },
  text: {
    top: 203,
    width: 274,
  },
  role: {
    top: 1,
    width: 74,
  },
  processingCapacity: {
    top: 36,
    width: 115,
  },
  type: {
    top: 100,
    width: 68,
  },
  siteLocation: {
    top: 137,
    width: 106,
  },
  gstin: {
    top: 204,
    width: 86,
  },
  emailCityStateCountryP: {
    top: 169,
    width: 619,
    height: 244,
    left: 340,
    position: "absolute",
  },
  ratings: {
    top: 256,
    left: 23,
    width: 121,
    height: 33,
    fontSize: FontSize.size_xl,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  text1: {
    top: 280,
    left: 179,
    fontSize: 26,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.mediumseagreen_100,
    width: 79,
  },
  approval: {
    top: 255,
    left: 159,
    width: 121,
    height: 33,
    fontSize: FontSize.size_xl,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  starsIcon: {
    top: 283,
    left: 13,
    width: 150,
    height: 27,
    position: "absolute",
  },
  groupChild: {
    width: 172,
    height: 45,
  },
  downloadFiles: {
    left: 12,
  },
  outlineArrowCircleDown: {
    top: 6,
    left: 127,
    width: 24,
  },
  vectorParent: {
    top: 350,
  },
  viewActivity: {
    left: 36,
  },
  vectorGroup: {
    top: 405,
  },
  saahasZeroWaste1Parent: {
    top: 172,
    left: 337,
    width: 983,
    height: 541,
    overflow: "hidden",
    position: "absolute",
  },
  kycChild: {
    top: 138,
    left: 339,
    borderRadius: 57,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderColor: "#15bb66",
    width: 969,
    height: 524,
  },
  kyc: {
    flex: 1,
    width: "100%",
  },
});

export default KYC;
