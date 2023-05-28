import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const BrandDashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.brandDashboard}>
      <View style={styles.desktop1} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <View style={[styles.sidebarParent, styles.sidebarLayout]}>
        <View style={[styles.sidebar, styles.sidebarLayout]}>
          <View style={styles.sidebarChild} />
          <Text style={[styles.title, styles.titleTypo]}>Navbar</Text>
          <View style={styles.ulLi}>
            <View style={styles.li1}>
              <View style={styles.li1Child} />
              <View style={styles.li1Item} />
              <View style={styles.li11}>
                <Text style={[styles.overview, styles.jamesTypo1]}>
                  Overview
                </Text>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </View>
            <View style={[styles.li12, styles.li12Position]}>
              <Text style={[styles.payouts, styles.jamesTypo1]}>Payouts</Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
            <Pressable
              style={[styles.li13, styles.li12Position]}
              onPress={() => navigation.navigate("Ledger")}
            >
              <Text style={[styles.ledger, styles.jamesTypo1]}>Ledger</Text>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </Pressable>
            <View style={[styles.li14, styles.li12Position]}>
              <Text style={[styles.statements, styles.jamesTypo1]}>
                Statements
              </Text>
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
            <View style={[styles.li15, styles.li12Position]}>
              <Text style={[styles.compliance, styles.jamesTypo1]}>
                Compliance
              </Text>
              <Image
                style={[styles.vectorIcon4, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
            <View style={[styles.li16, styles.li12Position]}>
              <Text style={[styles.settings, styles.jamesTypo1]}>Settings</Text>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
            </View>
          </View>
          <View style={[styles.contactUs, styles.contactLayout]}>
            <View style={[styles.contactUsChild, styles.contactLayout]} />
            <Text style={[styles.haveAnyProblems, styles.titleTypo]}>
              Have any problems with manage your dashbord?
            </Text>
            <View style={styles.contactUsItem} />
            <Text style={[styles.contactUs1, styles.statisticPosition]}>
              Contact Us
            </Text>
          </View>
        </View>
        <Image
          style={styles.asset74x1}
          resizeMode="cover"
          source={require("../assets/asset-74x-1.png")}
        />
      </View>
      <View style={[styles.eprTarget, styles.fundLayout]}>
        <View style={styles.childShadowBox} />
        <View style={[styles.title1, styles.titleLayout]}>
          <Text style={[styles.totalEprTarget, styles.jamesTypo]}>
            Total EPR Target
          </Text>
          <View style={[styles.titleChild, styles.titlePosition]} />
        </View>
        <Text style={[styles.text, styles.mtTypo]}>100</Text>
        <Text style={[styles.mt, styles.mtTypo]}>MT</Text>
        <Text style={[styles.fy20222023, styles.titleTypo]}>FY 2022-2023</Text>
      </View>
      <View style={styles.ledger1}>
        <View style={styles.ledgerChild} />
        <Text style={[styles.plasticCreditLedger, styles.jamesTypo]}>
          PLASTIC CREDIT LEDGER
        </Text>
        <Text style={styles.name}>NAME</Text>
        <Text style={[styles.saahasZeroWaste, styles.saahasTypo]}>
          Saahas Zero Waste
        </Text>
        <Text style={[styles.mt1, styles.mt1Typo]}>10MT</Text>
        <Text style={[styles.karnataka, styles.mt1Typo]}>KARNATAKA</Text>
        <Text style={[styles.saahasZeroWaste1, styles.saahasTypo]}>
          Saahas Zero Waste
        </Text>
        <Text style={[styles.viewAll, styles.loginTypo]}>{`View All `}</Text>
        <Text style={[styles.saahasZeroWaste2, styles.saahasTypo]}>
          Saahas Zero Waste
        </Text>
        <Text style={[styles.qty, styles.qtyTypo]}>QTY.</Text>
        <Text style={[styles.location, styles.qtyTypo]}>LOCATION</Text>
        <Pressable
          style={[styles.buttonNewParent, styles.buttonLayout]}
          onPress={() => navigation.navigate("Ledger")}
        >
          <View style={[styles.buttonNew, styles.buttonLayout]} />
          <Text style={[styles.viewData, styles.buttonLayout]}>View data</Text>
        </Pressable>
      </View>
      <View style={[styles.fund, styles.fundLayout]}>
        <View style={styles.childShadowBox} />
        <View style={[styles.title1, styles.titleLayout]}>
          <Text style={[styles.totalEprTarget, styles.jamesTypo]}>
            Total EPR Target
          </Text>
          <View style={[styles.titleChild, styles.titlePosition]} />
        </View>
        <Text style={[styles.text, styles.mtTypo]}>100</Text>
        <Text style={[styles.mt, styles.mtTypo]}>MT</Text>
        <Text style={[styles.fy20222023, styles.titleTypo]}>FY 2022-2023</Text>
      </View>
      <View style={[styles.stakeholderKyc, styles.stakeholderLayout]}>
        <View style={[styles.stakeholderKycChild, styles.stakeholderLayout]} />
        <View style={[styles.title3, styles.titleLayout]}>
          <Text style={[styles.exploreStakeholders, styles.jamesTypo]}>
            EXPLORE STAKEHOLDERS
          </Text>
          <View style={[styles.titleInner, styles.titlePosition]} />
        </View>
        <View style={[styles.statistic, styles.statisticPosition]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupParentLayout]}
            onPress={() => navigation.navigate("KYC")}
          >
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={[styles.text2, styles.jamesTypo]}>1</Text>
          </Pressable>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={[styles.text3, styles.textPosition]}>2</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={styles.text4}>3</Text>
          </View>
          <View style={[styles.groupView, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={styles.text4}>4</Text>
          </View>
          <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={[styles.text6, styles.textPosition]}>5</Text>
          </View>
          <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
            <View style={[styles.groupChild, styles.groupParentLayout]} />
            <Text style={[styles.text6, styles.textPosition]}>6</Text>
          </View>
          <Pressable
            style={[styles.jamesBond, styles.jamesPosition]}
            onPress={() => navigation.navigate("KYC")}
          >
            <Text style={[styles.jamesBond1, styles.jamesTypo]}>
              James Bond
            </Text>
          </Pressable>
          <Text style={[styles.jonyyDep, styles.jamesPosition]}>Jonyy Dep</Text>
          <Text style={[styles.jamesCameron, styles.jamesPosition]}>
            James Cameron
          </Text>
          <Text style={[styles.dinyDelems, styles.jamesPosition]}>
            Diny Delems
          </Text>
          <Text style={[styles.bradPit, styles.jamesPosition]}>Brad Pit</Text>
          <Text style={[styles.anjelinaJolly, styles.jamesPosition]}>
            Anjelina Jolly
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    height: 28,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  sidebarLayout: {
    height: 749,
    width: 330,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  jamesTypo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  li12Position: {
    height: 24,
    left: 29,
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
    width: 258,
    position: "absolute",
  },
  statisticPosition: {
    top: 101,
    position: "absolute",
  },
  fundLayout: {
    height: 193,
    top: 122,
    width: 310,
    position: "absolute",
  },
  titleLayout: {
    height: 30,
    position: "absolute",
  },
  jamesTypo: {
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  titlePosition: {
    backgroundColor: Color.dodgerblue,
    borderRadius: Border.br_8xs,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mtTypo: {
    width: 199,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  saahasTypo: {
    width: 122,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    left: 22,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  mt1Typo: {
    fontFamily: FontFamily.interRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    top: 122,
    textAlign: "left",
    position: "absolute",
  },
  qtyTypo: {
    top: 87,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  buttonLayout: {
    height: 25,
    width: 99,
    position: "absolute",
  },
  stakeholderLayout: {
    height: 496,
    width: 347,
    position: "absolute",
  },
  groupParentLayout: {
    width: 42,
    height: 40,
    left: 0,
    position: "absolute",
  },
  textPosition: {
    width: 14,
    left: 14,
    top: 8,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  jamesPosition: {
    left: 65,
    position: "absolute",
  },
  desktop1: {
    borderColor: "#000",
    width: 1366,
    borderWidth: 4,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    height: 769,
    backgroundColor: Color.white,
  },
  login: {
    top: 502,
    left: 70,
    width: 141,
    color: Color.white,
  },
  sidebarChild: {
    borderRadius: Border.br_21xl,
    width: 310,
    backgroundColor: Color.mediumseagreen_100,
    height: 749,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title: {
    top: 139,
    fontSize: FontSize.size_lg,
    color: Color.gray_500,
    width: 66,
    textAlign: "left",
    left: 68,
  },
  li1Child: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 5,
    elevation: 5,
    width: 260,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xs,
    height: 56,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  li1Item: {
    top: 11,
    left: 303,
    borderRadius: Border.br_51xl,
    backgroundColor: Color.aqua,
    width: 2,
    height: 34,
    position: "absolute",
  },
  overview: {
    color: Color.black,
    width: 77,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "90.91%",
    width: "21.93%",
    top: "9.09%",
    right: "78.07%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  li11: {
    top: 16,
    width: 119,
    height: 22,
    left: 29,
    position: "absolute",
  },
  li1: {
    height: 56,
    width: 305,
    left: 0,
    top: 0,
    position: "absolute",
  },
  payouts: {
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
    width: 66,
    color: Color.white,
  },
  vectorIcon1: {
    width: "24.27%",
    right: "75.73%",
  },
  li12: {
    top: 74,
    width: 107,
  },
  ledger: {
    width: 57,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
    color: Color.white,
  },
  vectorIcon2: {
    width: "26.32%",
    right: "73.68%",
  },
  li13: {
    top: 132,
    width: 99,
  },
  statements: {
    width: 94,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
    color: Color.white,
  },
  vectorIcon3: {
    width: "18.46%",
    right: "81.54%",
  },
  li14: {
    top: 190,
    width: 135,
  },
  compliance: {
    width: 96,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
    color: Color.white,
  },
  vectorIcon4: {
    width: "18.94%",
    right: "81.06%",
  },
  li15: {
    top: 248,
    width: 138,
  },
  settings: {
    width: 68,
    left: 42,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
    position: "absolute",
    color: Color.white,
  },
  vectorIcon5: {
    width: "22.86%",
    right: "77.14%",
  },
  li16: {
    top: 304,
    width: 109,
  },
  ulLi: {
    top: 178,
    height: 328,
    width: 305,
    left: 25,
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
    fontSize: FontSize.size_sm,
    color: Color.gray_700,
    width: 216,
    left: 18,
    textAlign: "center",
  },
  contactUsItem: {
    top: 93,
    left: 28,
    backgroundColor: Color.royalblue,
    shadowColor: "rgba(0, 240, 255, 0.5)",
    width: 195,
    height: 40,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  contactUs1: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 116,
    fontSize: FontSize.size_xl,
    left: 68,
    textAlign: "center",
    color: Color.white,
  },
  contactUs: {
    top: 559,
    left: 25,
    height: 146,
    width: 258,
  },
  sidebar: {
    left: 0,
    top: 0,
  },
  asset74x1: {
    top: 35,
    left: 31,
    width: 250,
    height: 88,
    position: "absolute",
  },
  sidebarParent: {
    top: 9,
    left: 18,
  },
  childShadowBox: {
    height: 201,
    width: 313,
    borderColor: "#15bb66",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    left: -4,
    top: -4,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderWidth: 4,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  totalEprTarget: {
    left: 54,
    width: 189,
    top: 3,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  titleChild: {
    width: 36,
  },
  title1: {
    top: 31,
    width: 243,
    left: 16,
  },
  text: {
    top: 80,
    fontSize: FontSize.size_29xl,
    left: 20,
  },
  mt: {
    top: 106,
    left: 112,
    fontSize: FontSize.size_xl,
  },
  fy20222023: {
    top: 155,
    fontSize: FontSize.balancePecentage_size,
    color: Color.dodgerblue,
    width: 149,
    left: 20,
    textAlign: "center",
  },
  eprTarget: {
    left: 348,
  },
  ledgerChild: {
    width: 637,
    height: 356,
    borderColor: "#15bb66",
    left: -4,
    top: -4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderWidth: 4,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  plasticCreditLedger: {
    top: 32,
    left: 53,
    width: 284,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  name: {
    width: 50,
    left: 22,
    top: 87,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  saahasZeroWaste: {
    top: 122,
    width: 122,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
  },
  mt1: {
    left: 205,
    width: 36,
  },
  karnataka: {
    left: 341,
    width: 80,
  },
  saahasZeroWaste1: {
    top: 157,
  },
  viewAll: {
    top: 310,
    left: 404,
    color: Color.mediumseagreen_100,
    width: 167,
  },
  saahasZeroWaste2: {
    top: 194,
  },
  qty: {
    left: 203,
    width: 40,
  },
  location: {
    left: 338,
    width: 86,
  },
  buttonNew: {
    borderRadius: Border.br_3xs,
    height: 25,
    backgroundColor: Color.mediumseagreen_100,
    left: 0,
    top: 0,
  },
  viewData: {
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 25,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  buttonNewParent: {
    top: 117,
    left: 486,
  },
  ledger1: {
    top: 345,
    left: 353,
    width: 629,
    height: 348,
    position: "absolute",
  },
  fund: {
    left: 677,
  },
  stakeholderKycChild: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    height: 496,
    width: 347,
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  exploreStakeholders: {
    left: 47,
    width: 266,
    top: 3,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  titleInner: {
    width: 31,
  },
  title3: {
    top: 33,
    left: 17,
    width: 313,
    height: 30,
  },
  groupChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.mediumseagreen_100,
    width: 42,
    top: 0,
  },
  text2: {
    width: 10,
    top: 8,
    left: 16,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    width: 42,
  },
  text3: {
    textAlign: "center",
  },
  rectangleGroup: {
    top: 65,
  },
  text4: {
    width: 15,
    left: 14,
    top: 8,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleContainer: {
    top: 130,
  },
  groupView: {
    top: 195,
  },
  text6: {
    textAlign: "left",
  },
  rectangleParent1: {
    top: 260,
  },
  rectangleParent2: {
    top: 325,
  },
  jamesBond1: {
    width: 99,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  jamesBond: {
    top: 8,
  },
  jonyyDep: {
    top: 73,
    width: 85,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  jamesCameron: {
    top: 138,
    width: 131,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  dinyDelems: {
    top: 203,
    width: 101,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  bradPit: {
    top: 268,
    width: 64,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  anjelinaJolly: {
    top: 333,
    color: Color.gray_400,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    width: 107,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  statistic: {
    left: 33,
    width: 196,
    height: 365,
  },
  stakeholderKyc: {
    top: 116,
    left: 993,
  },
  brandDashboard: {
    flex: 1,
    width: "100%",
    height: 769,
    backgroundColor: Color.white,
  },
});

export default BrandDashboard;
