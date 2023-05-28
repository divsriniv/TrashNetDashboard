import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const FundLedger = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.fundLedger, styles.desktop1Layout]}>
      <View style={[styles.desktop1, styles.desktop1Layout]} />
      <View style={[styles.sidebarParent, styles.sidebarLayout]}>
        <View style={[styles.sidebar, styles.sidebarLayout]}>
          <View style={[styles.sidebarChild, styles.sidebarLayout]} />
          <Text style={[styles.title, styles.titleTypo]}>Navbar</Text>
          <View style={[styles.ulLi, styles.ulLiPosition]}>
            <Pressable
              style={styles.li1}
              onPress={() => navigation.navigate("BrandDashboard")}
            >
              <View style={styles.li1Child} />
              <View style={styles.li11}>
                <Text style={[styles.overview, styles.titleTypo]}>
                  Overview
                </Text>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector6.png")}
                />
              </View>
            </Pressable>
            <View style={styles.li12}>
              <Image
                style={[styles.li1Item, styles.itemLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-3.png")}
              />
              <Text style={[styles.payouts, styles.payoutsTypo]}>Payouts</Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector7.png")}
              />
            </View>
            <View style={[styles.li13, styles.li13Position]}>
              <Text style={[styles.overview, styles.titleTypo]}>Ledger</Text>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector8.png")}
              />
            </View>
            <View style={[styles.li14, styles.li13Position]}>
              <Text style={[styles.overview, styles.titleTypo]}>
                Statements
              </Text>
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
            <View style={[styles.li15, styles.li13Position]}>
              <Text style={[styles.overview, styles.titleTypo]}>
                Compliance
              </Text>
              <Image
                style={[styles.vectorIcon4, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector10.png")}
              />
            </View>
            <View style={[styles.li16, styles.li13Position]}>
              <Text style={[styles.overview, styles.titleTypo]}>Settings</Text>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
          </View>
          <View style={[styles.contactUs, styles.contactLayout]}>
            <View style={[styles.contactUsChild, styles.contactLayout]} />
            <Text style={[styles.haveAnyProblems, styles.contactUs1FlexBox]}>
              Have any problems with manage your dashbord?
            </Text>
            <View style={[styles.contactUsItem, styles.itemLayout]} />
            <Text style={[styles.contactUs1, styles.text4Typo]}>
              Contact Us
            </Text>
          </View>
        </View>
        <Image
          style={[styles.asset74x1, styles.ulLiPosition]}
          resizeMode="cover"
          source={require("../assets/asset-74x-11.png")}
        />
      </View>
      <Text style={[styles.fundDistributionLedger, styles.metricsPosition]}>
        FUND DISTRIBUTION LEDGER
      </Text>
      <Text style={styles.name}>NAME</Text>
      <Text style={[styles.saahasZeroWaste, styles.saahasTypo]}>
        Saahas Zero Waste
      </Text>
      <Text style={[styles.saahasZeroWaste1, styles.saahasTypo]}>
        Saahas Zero Waste
      </Text>
      <Text style={[styles.text, styles.textTypo2]}>3/06/2022</Text>
      <Text style={[styles.text1, styles.textTypo2]}>3/06/2022</Text>
      <Text style={[styles.bengaluru, styles.bengaluruTypo]}>BENGALURU</Text>
      <Text style={[styles.bengaluru1, styles.bengaluruTypo]}>BENGALURU</Text>
      <Text style={[styles.mlp, styles.mlpTypo]}>MLP</Text>
      <Text style={[styles.mlp1, styles.mlpTypo]}>MLP</Text>
      <Text style={[styles.text2, styles.textTypo1]}>12345678</Text>
      <Text style={[styles.text3, styles.textTypo1]}>12345678</Text>
      <Text style={[styles.approved, styles.mlpTypo]}>Approved</Text>
      <Text style={[styles.processing, styles.mlpTypo]}>Processing</Text>
      <Text style={[styles.date, styles.dateTypo]}>DATE</Text>
      <Text style={styles.creditsGenerated}>CREDITS GENERATED</Text>
      <Text style={[styles.material, styles.amountTypo]}>MATERIAL</Text>
      <Text style={[styles.amount, styles.amountTypo]}>AMOUNT</Text>
      <Text style={[styles.status, styles.amountTypo]}>STATUS</Text>
      <Text style={[styles.transactionId, styles.dateTypo]}>
        TRANSACTION ID
      </Text>
      <Image
        style={styles.fundLedgerChild}
        resizeMode="cover"
        source={require("../assets/rectangle-5546.png")}
      />
      <View style={[styles.metrics, styles.metricsPosition]}>
        <View style={styles.chartmetric}>
          <Text style={styles.totalIncome}>Total Disbursed</Text>
          <Text style={[styles.text4, styles.text4Typo]}>
            <Text style={styles.text5}>$ 18532</Text>
            <Text style={styles.text6}>.52</Text>
          </Text>
          <View style={styles.percentagegrown}>
            <Image
              style={styles.iconsgrownUp}
              resizeMode="cover"
              source={require("../assets/iconsgrown-up.png")}
            />
            <Text style={[styles.text7, styles.titleTypo]}> 73%</Text>
          </View>
        </View>
      </View>
      <View style={styles.piechart}>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-2533.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-2534.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-2535.png")}
          />
          <Text style={[styles.collector, styles.text8Typo]}>Collector</Text>
          <Text style={[styles.text8, styles.textLayout]}>40%</Text>
          <Text style={[styles.text9, styles.textTypo]}>20%</Text>
          <Text style={[styles.text10, styles.textTypo]}>30%</Text>
          <Text style={[styles.recycler, styles.textTypo]}>Recycler</Text>
          <Text style={[styles.manufacturer, styles.textTypo]}>
            Manufacturer
          </Text>
        </View>
        <Image
          style={styles.piechartChild}
          resizeMode="cover"
          source={require("../assets/group-1000004333.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  desktop1Layout: {
    height: 769,
    backgroundColor: Color.white,
  },
  sidebarLayout: {
    height: 749,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    textAlign: "left",
  },
  ulLiPosition: {
    left: 30,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  itemLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  payoutsTypo: {
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  li13Position: {
    height: 24,
    left: 22,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  contactLayout: {
    height: 146,
    width: 248,
    position: "absolute",
  },
  contactUs1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
  },
  metricsPosition: {
    left: 347,
    position: "absolute",
  },
  saahasTypo: {
    height: 28,
    width: 191,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    left: 360,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    width: 79,
    fontFamily: FontFamily.interRegular,
    left: 530,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  bengaluruTypo: {
    width: 107,
    left: 657,
    fontFamily: FontFamily.interRegular,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  mlpTypo: {
    width: 126,
    fontFamily: FontFamily.interRegular,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    left: 922,
    width: 126,
    fontFamily: FontFamily.interRegular,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  dateTypo: {
    top: 373,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  amountTypo: {
    height: 19,
    top: 374,
    width: 135,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 10,
    width: 16,
    left: 0,
    position: "absolute",
  },
  text8Typo: {
    height: 12,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    width: 34,
    color: Color.gray_300,
  },
  textTypo: {
    left: 26,
    height: 12,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  desktop1: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4,
    width: 1366,
    left: 0,
    top: 0,
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
    position: "absolute",
  },
  li1Child: {
    left: 263,
    borderRadius: Border.br_51xl,
    backgroundColor: Color.aqua,
    width: 2,
    height: 34,
    top: 0,
    position: "absolute",
  },
  overview: {
    left: 40,
    color: Color.white,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "90.91%",
    width: "21.93%",
    top: "9.09%",
    right: "78.07%",
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  li11: {
    top: 5,
    width: 114,
    height: 22,
    left: 0,
    position: "absolute",
  },
  li1: {
    width: 265,
    height: 34,
    left: 22,
    top: 0,
    position: "absolute",
  },
  li1Item: {
    top: -5,
    left: -5,
    width: 260,
    height: 66,
  },
  payouts: {
    top: 16,
    left: 62,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIcon1: {
    height: "42.86%",
    width: "10%",
    top: "28.57%",
    right: "81.2%",
    bottom: "28.57%",
    left: "8.8%",
  },
  li12: {
    top: 47,
    width: 250,
    height: 56,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    width: "26.32%",
    right: "73.68%",
  },
  li13: {
    top: 121,
    width: 95,
  },
  vectorIcon3: {
    width: "18.46%",
    right: "81.54%",
  },
  li14: {
    top: 179,
    width: 130,
  },
  vectorIcon4: {
    width: "18.94%",
    right: "81.06%",
  },
  li15: {
    top: 237,
    width: 132,
  },
  vectorIcon5: {
    width: "22.86%",
    right: "77.14%",
  },
  li16: {
    top: 293,
    width: 105,
  },
  ulLi: {
    top: 189,
    width: 287,
    height: 317,
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
  },
  contactUs1: {
    top: 101,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
    color: Color.white,
    left: 65,
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
    width: 240,
    height: 88,
  },
  sidebarParent: {
    top: 9,
    left: 18,
    width: 317,
    height: 749,
  },
  fundDistributionLedger: {
    top: 90,
    width: 445,
    height: 42,
    fontSize: FontSize.size_xl,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  name: {
    width: 98,
    left: 360,
    top: 373,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  saahasZeroWaste: {
    top: 416,
  },
  saahasZeroWaste1: {
    top: 450,
  },
  text: {
    top: 414,
  },
  text1: {
    top: 448,
  },
  bengaluru: {
    top: 415,
  },
  bengaluru1: {
    top: 449,
  },
  mlp: {
    left: 796,
    width: 126,
    top: 415,
  },
  mlp1: {
    left: 796,
    width: 126,
    top: 449,
  },
  text2: {
    top: 415,
  },
  text3: {
    top: 449,
  },
  approved: {
    left: 1080,
    top: 415,
  },
  processing: {
    left: 1080,
    top: 449,
  },
  date: {
    left: 538,
    width: 62,
    height: 34,
  },
  creditsGenerated: {
    top: 359,
    width: 135,
    left: 657,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  material: {
    left: 792,
  },
  amount: {
    left: 913,
  },
  status: {
    left: 1080,
  },
  transactionId: {
    left: 1184,
    width: 141,
    height: 41,
  },
  fundLedgerChild: {
    top: 66,
    left: 332,
    borderRadius: 14,
    width: 590,
    height: 270,
    position: "absolute",
  },
  totalIncome: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.mainGrey,
    alignSelf: "stretch",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  text5: {
    fontSize: 29,
    color: Color.black,
  },
  text6: {
    fontSize: 19,
    color: "#afadfe",
  },
  text4: {
    textAlign: "left",
  },
  iconsgrownUp: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text7: {
    fontSize: FontSize.balancePecentage_size,
    color: "#4fd18b",
    marginLeft: 4,
    textAlign: "left",
    flex: 1,
  },
  percentagegrown: {
    borderRadius: 19,
    backgroundColor: "#dcf5e8",
    width: 87,
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  chartmetric: {
    borderRadius: 11,
    paddingLeft: 27,
    paddingTop: 14,
    paddingRight: 30,
    paddingBottom: 13,
    justifyContent: "space-between",
    alignSelf: "stretch",
    width: 236,
    backgroundColor: Color.white,
  },
  metrics: {
    top: 153,
    height: 143,
    paddingRight: 151,
    flexDirection: "row",
    width: 236,
  },
  groupChild: {
    top: 2,
  },
  groupItem: {
    top: 46,
  },
  groupInner: {
    top: 87,
  },
  collector: {
    left: 29,
    width: 69,
    color: Color.gray_200,
    top: 0,
  },
  text8: {
    top: 18,
    left: 25,
    height: 12,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  text9: {
    top: 62,
    width: 33,
    color: Color.gray_300,
    left: 26,
  },
  text10: {
    top: 103,
    width: 34,
    color: Color.gray_300,
  },
  recycler: {
    top: 43,
    width: 65,
    color: Color.gray_200,
  },
  manufacturer: {
    top: 85,
    width: 102,
    color: Color.gray_200,
  },
  ellipseParent: {
    top: 27,
    left: 150,
    width: 128,
    height: 115,
    position: "absolute",
  },
  piechartChild: {
    left: -4,
    width: 146,
    height: 151,
    top: 0,
    position: "absolute",
  },
  piechart: {
    top: 141,
    left: 573,
    width: 278,
    height: 145,
    position: "absolute",
  },
  fundLedger: {
    width: "100%",
    flex: 1,
  },
});

export default FundLedger;
