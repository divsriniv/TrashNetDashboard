import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Ledger = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ledger}>
      <View style={[styles.desktop1, styles.desktop1Border]} />
      <View style={[styles.sidebarParent, styles.sidebarLayout]}>
        <View style={[styles.sidebar, styles.sidebarLayout]}>
          <View style={[styles.sidebarChild, styles.sidebarLayout]} />
          <Text style={[styles.title, styles.titleTypo]}>Navbar</Text>
          <View style={styles.ulLi}>
            <Pressable
              style={[styles.li1, styles.li1Position]}
              onPress={() => navigation.navigate("BrandDashboard")}
            >
              <View style={[styles.li1Child, styles.li1Position]} />
              <View style={styles.li11}>
                <Text style={[styles.overview, styles.ledger1Typo]}>
                  Overview
                </Text>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector6.png")}
                />
              </View>
            </Pressable>
            <View style={[styles.li12, styles.li12Layout]}>
              <Text style={[styles.overview, styles.ledger1Typo]}>Payouts</Text>
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector12.png")}
              />
            </View>
            <View style={styles.li13}>
              <Image
                style={styles.li1Item}
                resizeMode="cover"
                source={require("../assets/rectangle-31.png")}
              />
              <Text style={[styles.ledger1, styles.ledgerTypo]}>Ledger</Text>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
            </View>
            <View style={[styles.li14, styles.li12Layout]}>
              <Text style={[styles.overview, styles.ledger1Typo]}>
                Statements
              </Text>
              <Image
                style={[styles.vectorIcon3, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
            <View style={[styles.li15, styles.li12Layout]}>
              <Text style={[styles.overview, styles.ledger1Typo]}>
                Compliance
              </Text>
              <Image
                style={[styles.vectorIcon4, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector10.png")}
              />
            </View>
            <View style={[styles.li16, styles.li12Layout]}>
              <Text style={[styles.overview, styles.ledger1Typo]}>
                Settings
              </Text>
              <Image
                style={[styles.vectorIcon5, styles.vectorIconPosition]}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
          </View>
          <View style={[styles.contactUs, styles.contactLayout]}>
            <View style={[styles.contactUsChild, styles.contactLayout]} />
            <Text style={[styles.haveAnyProblems, styles.downloadFilesTypo]}>
              Have any problems with manage your dashbord?
            </Text>
            <View style={[styles.contactUsItem, styles.ledgerChildShadowBox]} />
            <Text style={[styles.contactUs1, styles.contactUs1Typo]}>
              Contact Us
            </Text>
          </View>
        </View>
        <Image
          style={styles.asset74x1}
          resizeMode="cover"
          source={require("../assets/asset-74x-11.png")}
        />
      </View>
      <View style={styles.ledger2}>
        <View style={[styles.ledgerChild, styles.ledgerChildShadowBox]} />
        <Text style={[styles.plasticCreditLedger, styles.contactUs1Typo]}>
          PLASTIC CREDIT LEDGER
        </Text>
        <Text style={styles.recycler}>RECYCLER</Text>
        <Text style={[styles.saahasZeroWaste, styles.textLayout]}>
          Saahas Zero Waste
        </Text>
        <Text style={[styles.text, styles.textTypo]}>3/06/2022</Text>
        <Text style={styles.bengaluru}>BENGALURU</Text>
        <Text style={[styles.mlp, styles.mlpTypo]}>MLP</Text>
        <Text style={[styles.text1, styles.mlpTypo]}>12345678</Text>
        <Text style={[styles.approved, styles.mlpTypo]}>Approved</Text>
        <Text style={styles.date}>DATE</Text>
        <Text style={styles.location}>LOCATION</Text>
        <Text style={[styles.material, styles.statusTypo]}>MATERIAL</Text>
        <Text style={[styles.creditSerial, styles.statusTypo]}>
          CREDIT SERIAL
        </Text>
        <Text style={[styles.status, styles.statusTypo]}>STATUS</Text>
        <View style={[styles.vectorParent, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Name</Text>
        </View>
        <View style={[styles.vectorGroup, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Transaction hash</Text>
        </View>
        <View style={[styles.vectorContainer, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Timestamp</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Status</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.vectorParent1, styles.vectorParentLayout]}>
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <Text style={[styles.downloadFiles, styles.downloadFilesTypo]}>
              Download Files
            </Text>
            <Image
              style={[styles.outlineArrowCircleDown, styles.li12Layout]}
              resizeMode="cover"
              source={require("../assets/outline--arrowcircledown.png")}
            />
          </View>
          <View style={[styles.vectorParent2, styles.vectorParentLayout]}>
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <Text style={[styles.downloadFiles, styles.downloadFilesTypo]}>
              Download Files
            </Text>
            <Image
              style={[styles.outlineArrowCircleDown, styles.li12Layout]}
              resizeMode="cover"
              source={require("../assets/outline--arrowcircledown.png")}
            />
          </View>
          <View style={[styles.vectorParent3, styles.vectorParentLayout]}>
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <Text style={[styles.downloadFiles, styles.downloadFilesTypo]}>
              Download Files
            </Text>
            <Image
              style={[styles.outlineArrowCircleDown, styles.li12Layout]}
              resizeMode="cover"
              source={require("../assets/outline--arrowcircledown.png")}
            />
          </View>
        </View>
        <View style={[styles.vectorParent4, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Status</Text>
        </View>
        <View style={[styles.vectorParent5, styles.vectorParentPosition1]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Status</Text>
        </View>
        <View style={[styles.vectorParent6, styles.vectorParentPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Timestamp</Text>
        </View>
        <View style={[styles.vectorParent7, styles.vectorParentPosition1]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-21.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Timestamp</Text>
        </View>
        <View style={[styles.vectorParent8, styles.vectorParentPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Transaction Hash</Text>
        </View>
        <View style={[styles.vectorParent9, styles.vectorParentPosition1]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Transaction Hash</Text>
        </View>
        <View style={[styles.vectorParent10, styles.vectorParentPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Name</Text>
        </View>
        <View style={[styles.vectorParent11, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Text style={[styles.name, styles.textTypo]}>Name</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  desktop1Border: {
    borderWidth: 4,
    borderStyle: "solid",
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
  li1Position: {
    height: 34,
    top: 0,
    position: "absolute",
  },
  ledger1Typo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  li12Layout: {
    height: 24,
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
  ledgerTypo: {
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  contactLayout: {
    height: 146,
    width: 248,
    position: "absolute",
  },
  downloadFilesTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  ledgerChildShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  contactUs1Typo: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textLayout: {
    height: 28,
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  mlpTypo: {
    width: 126,
    top: 191,
    fontFamily: FontFamily.interRegular,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  statusTypo: {
    height: 19,
    top: 160,
    width: 135,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  groupParentLayout: {
    height: 44,
    width: 162,
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 172,
    borderRadius: Border.br_3xs,
    left: -5,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 35,
    width: 162,
    position: "absolute",
  },
  vectorParentPosition1: {
    top: 351,
    height: 44,
    width: 162,
    position: "absolute",
  },
  vectorParentPosition: {
    top: 296,
    height: 44,
    width: 162,
    position: "absolute",
  },
  desktop1: {
    borderColor: "#000",
    width: 1366,
    left: 0,
    top: 0,
    position: "absolute",
    height: 769,
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
  },
  overview: {
    left: 40,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    top: 0,
  },
  vectorIcon: {
    height: "90.91%",
    width: "21.93%",
    top: "9.09%",
    right: "78.07%",
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
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
    left: 21,
  },
  vectorIcon1: {
    width: "24.27%",
    right: "75.73%",
  },
  li12: {
    top: 63,
    width: 103,
    left: 21,
  },
  li1Item: {
    width: 260,
    height: 66,
    borderRadius: Border.br_3xs,
    left: -5,
    top: -5,
    position: "absolute",
  },
  ledger1: {
    top: 19,
    left: 61,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIcon2: {
    height: "42.86%",
    width: "10%",
    top: "33.93%",
    right: "81.6%",
    bottom: "23.21%",
    left: "8.4%",
  },
  li13: {
    top: 102,
    width: 250,
    height: 56,
    left: 0,
    position: "absolute",
  },
  vectorIcon3: {
    width: "18.46%",
    right: "81.54%",
  },
  li14: {
    top: 179,
    width: 130,
    left: 21,
  },
  vectorIcon4: {
    width: "18.94%",
    right: "81.06%",
  },
  li15: {
    top: 237,
    width: 132,
    left: 21,
  },
  vectorIcon5: {
    width: "22.86%",
    right: "77.14%",
  },
  li16: {
    top: 293,
    width: 105,
    left: 21,
  },
  ulLi: {
    top: 189,
    left: 31,
    width: 286,
    height: 317,
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
    textAlign: "center",
  },
  contactUsItem: {
    top: 93,
    left: 27,
    backgroundColor: Color.royalblue,
    shadowColor: "rgba(0, 240, 255, 0.5)",
    width: 187,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  contactUs1: {
    top: 101,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    textAlign: "center",
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
    left: 30,
    width: 240,
    height: 88,
    position: "absolute",
  },
  sidebarParent: {
    left: 18,
    width: 317,
    height: 749,
    top: 9,
  },
  ledgerChild: {
    top: -4,
    left: -4,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderColor: "#15bb66",
    width: 992,
    height: 624,
    borderWidth: 4,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  plasticCreditLedger: {
    top: 62,
    left: 92,
    width: 445,
    height: 42,
    color: Color.gray_400,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
  },
  recycler: {
    width: 98,
    left: 43,
    top: 159,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  saahasZeroWaste: {
    top: 192,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 191,
    textTransform: "capitalize",
    height: 28,
    fontSize: FontSize.size_smi,
    left: 43,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 190,
    left: 213,
    width: 79,
    height: 28,
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    fontFamily: FontFamily.interRegular,
  },
  bengaluru: {
    width: 107,
    left: 340,
    top: 191,
    fontFamily: FontFamily.interRegular,
    height: 28,
    textTransform: "capitalize",
    fontSize: FontSize.size_smi,
    color: Color.gray_400,
    textAlign: "left",
    position: "absolute",
  },
  mlp: {
    left: 479,
  },
  text1: {
    left: 605,
  },
  approved: {
    left: 763,
  },
  date: {
    left: 221,
    width: 62,
    top: 159,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  location: {
    top: 158,
    width: 135,
    left: 340,
    color: Color.gray_400,
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.balancePecentage,
    fontWeight: "600",
    position: "absolute",
  },
  material: {
    left: 475,
  },
  creditSerial: {
    left: 596,
  },
  status: {
    left: 763,
  },
  groupChild: {
    top: 4,
  },
  name: {
    left: 9,
    fontSize: FontSize.size_5xs,
    color: Color.mediumseagreen_100,
    width: 72,
    height: 9,
    top: 0,
  },
  vectorParent: {
    left: 23,
    top: 243,
    width: 162,
  },
  vectorGroup: {
    left: 204,
    top: 243,
    width: 162,
  },
  vectorContainer: {
    left: 386,
    top: 243,
    width: 162,
  },
  groupView: {
    top: 245,
    left: 569,
  },
  groupChild1: {
    top: -5,
    height: 45,
    width: 172,
  },
  downloadFiles: {
    left: 12,
    color: Color.white,
    textAlign: "left",
    top: 9,
  },
  outlineArrowCircleDown: {
    top: 6,
    left: 127,
    width: 24,
  },
  vectorParent1: {
    left: 0,
    top: 0,
  },
  vectorParent2: {
    top: 53,
    left: 0,
  },
  vectorParent3: {
    top: 106,
    left: 3,
  },
  groupParent: {
    top: 254,
    left: 760,
    width: 165,
    height: 141,
    position: "absolute",
  },
  vectorParent4: {
    top: 298,
    left: 569,
  },
  vectorParent5: {
    left: 569,
  },
  vectorParent6: {
    left: 386,
  },
  vectorParent7: {
    left: 386,
  },
  vectorParent8: {
    left: 204,
  },
  vectorParent9: {
    left: 204,
  },
  vectorParent10: {
    left: 23,
  },
  vectorParent11: {
    top: 349,
    left: 23,
  },
  ledger2: {
    top: 127,
    left: 335,
    width: 984,
    height: 616,
    position: "absolute",
  },
  ledger: {
    flex: 1,
    width: "100%",
    height: 769,
    backgroundColor: Color.white,
  },
});

export default Ledger;
